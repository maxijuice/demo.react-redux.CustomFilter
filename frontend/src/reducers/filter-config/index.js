import initialState, { FilterConfigRecord } from "../initial-state";
import * as ActionTypes from "../../constants/action-types";

export default function filterConfigReducer(state = initialState.get("filterConfig"), action) {
    switch (action.type) {
        case ActionTypes.CHANGE_FILTER_TEXT:
        case ActionTypes.CHANGE_FILTER_TYPE:
        case ActionTypes.CHANGE_FILTER_SORT:
            return getFilterConfigFromAction(state, action);
        default:
            return state;
    }
}

function getFilterConfigFromAction(state, action) {
    function getValue(prop) {
        return typeof(action[prop]) === "undefined" ? state[prop] : action[prop];
    }

    return new FilterConfigRecord({
        text: getValue("text"),
        filterType: getValue("filterType"),
        sortEnabled: getValue("sortEnabled")
    });
}