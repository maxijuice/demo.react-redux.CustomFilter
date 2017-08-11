import ActionTypes from "constants/action-types";
import initialState from "reducers/initial-state";
import { toggleTable, toggleDimension, toggleRow } from "./toggling";
import { fetchEntities, fetchState } from "./fetching";

export default function domainReducer(state = initialState.get("domain"), action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_TABLE: return toggleTable(state, action.tableId);
        case ActionTypes.TOGGLE_DIMENSION: return toggleDimension(state, action.dimensionId);
        case ActionTypes.TOGGLE_ROW: return toggleRow(state, action.rowId);    
        case ActionTypes.FETCH_FILTER_STATE_SUCCESS:  return fetchState(state, action.response);
        case ActionTypes.FETCH_ENTITIES_SUCCESS: return fetchEntities(state, action.response);           
        case ActionTypes.FETCH_ENTITIES_ERROR:
        case ActionTypes.FETCH_ENTITIES_REQUEST:
        default:
            return state;
    }
}