import initialState, { FilterConfigRecord } from "../initialState";
import * as ActionTypes from "../../constants/actionTypes";

export default function filterConfigReducer(state = initialState.get("filterConfig"), action) {
    switch(action.type) {
        case ActionTypes.CHANGE_FILTER_TEXT:
            return new FilterConfigRecord({text: action.text});
        case ActionTypes.CHANGE_FILTER_TYPE:
            return new FilterConfigRecord({type: action.filterType});
        case ActionTypes.CHANGE_FILTER_SORT:
            return new FilterConfigRecord({sortEnabled: action.sortEnabled});
        default: 
            return state;        
    }
}