import * as ActionTypes from "../../constants/action-types";
import initialState from "../initial-state";
import { toggleTable, toggleDimension, toggleRow } from "./utils/toggle-entity";
import requestEntities from "./utils/request-entities";

export default function domainReducer(state = initialState.get("domain"), action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_TABLE: return toggleTable(state, action.tableId);
        case ActionTypes.TOGGLE_DIMENSION: return toggleDimension(state, action.dimensionId);
        case ActionTypes.TOGGLE_ROW: return toggleRow(state, action.rowId);     
        case ActionTypes.FETCH_ENTITIES_SUCCESS: return requestEntities(state, action.response);           
        case ActionTypes.FETCH_ENTITIES_ERROR:
        case ActionTypes.FETCH_ENTITIES_REQUEST:
        default:
            return state;
    }
}