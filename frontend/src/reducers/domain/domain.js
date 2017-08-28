import ActionTypes from "constants/actions";
import { CONTAINS, EQUALS, BEGINS_WITH } from "constants/filters";
import { Map, List } from "immutable";
import { fromJS } from "immutable";

const initialDomain = Map({
    filterResult: Map({
        tables: List(),
        dimensions: List(),
        rows: List()
    }),
    entities: Map({
        tables: Map(),
        dimensions: Map(),
        rows: Map()
    }),
    filters: List([ CONTAINS, BEGINS_WITH, EQUALS ])
});

export default function domainReducer(state = initialDomain, action) {
    let newDomainState = state;

    switch (action.type) {
        case ActionTypes.TOGGLE_TABLE:
            const tableId = action.tableId;
            const chosenTables = state.getIn([ "filterResult", "tables" ]);

            if (chosenTables.includes(tableId)) {
                newDomainState = state.updateIn([ "filterResult", "tables" ], tables => tables.delete(tables.indexOf(tableId)));

                const allRows = state.getIn([ "entities", "rows" ]);
                const allDims = state.getIn([ "entities", "dimensions" ]);

                newDomainState = newDomainState.updateIn([ "filterResult", "dimensions" ], dims => dims.filter(dimId => allDims.getIn([ dimId, "table" ]) !== tableId));
                newDomainState = newDomainState.updateIn([ "filterResult", "rows" ], rows => rows.filter(rowId => allRows.getIn([ rowId, "table" ]) !== tableId));
            } else {
                newDomainState = state.updateIn([ "filterResult", "tables" ], tables => tables.push(tableId));
            }

            return newDomainState;

        case ActionTypes.TOGGLE_DIMENSION:
            const dimId = action.dimensionId;
            const chosenDims = state.getIn([ "filterResult", "dimensions" ]);

            if (chosenDims.includes(dimId)) {
                newDomainState = state.updateIn([ "filterResult", "dimensions" ], dims => dims.delete(dims.indexOf(dimId)));

                const allRows = state.getIn([ "entities", "rows" ]);
                newDomainState = newDomainState.updateIn([ "filterResult", "rows" ], rows => rows.filter(rowId => allRows.getIn([ rowId, "dimension" ]) !== dimId));
            } else {
                newDomainState = state.updateIn([ "filterResult", "dimensions" ], dims => dims.push(dimId));
            }

            return newDomainState;

        case ActionTypes.TOGGLE_ROW:
            const rowId = action.rowId;
            const chosenRows = state.getIn([ "filterResult", "rows" ]);

            if (chosenRows.includes(rowId)) {
                newDomainState = state.updateIn([ "filterResult", "rows" ], rows => rows.delete(rows.indexOf(rowId)));
            } else {
                newDomainState = state.updateIn([ "filterResult", "rows" ], rows => rows.push(rowId));
            }

            return newDomainState;

        case ActionTypes.FETCH_FILTER_STATE_SUCCESS:
            const filterResult = fromJS(action.response);
            return state.updateIn([ "filterResult" ], map => map.merge(filterResult));

        case ActionTypes.FETCH_ENTITIES_SUCCESS:
            const entities = fromJS(action.response.entities);
            return state.updateIn([ "entities" ], map => map.merge(entities));

        case ActionTypes.FETCH_ENTITIES_ERROR:
        case ActionTypes.FETCH_ENTITIES_REQUEST:
        default:
            return state;
    }
}