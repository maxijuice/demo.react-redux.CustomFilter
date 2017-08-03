import initialState, { FilterConfigRecord } from "../initial-state";
import * as ActionTypes from "../../constants/action-types";

export default function filterConfigReducer(state = initialState.get("filterConfig"), action) {
    switch (action.type) {
        case ActionTypes.CHANGE_FILTER_TEXT: return state.text(action.text);
        case ActionTypes.CHANGE_FILTER_TYPE: return state.type(action.filterType);
        case ActionTypes.CHANGE_FILTER_SORT: return state.sort(action.sortEnabled);
        default:
            return state;
    }
}