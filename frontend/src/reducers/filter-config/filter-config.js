import ActionTypes from "constants/actions";
import FilterConfigRecord from "records/filter-config";

const initialFilterConfigState = new FilterConfigRecord();

export default function filterConfigReducer(state = initialFilterConfigState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_FILTER_TEXT: return state.text(action.text);
        case ActionTypes.CHANGE_FILTER_TYPE: return state.type(action.filterType);
        case ActionTypes.TOGGLE_FILTER_SORT: return state.sort();
        default:
            return state;
    }
}