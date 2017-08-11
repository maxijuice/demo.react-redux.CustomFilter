import initialState from "reducers/initial-state";
import ActionTypes from "constants/action-types";

export default function messageReducer(state = initialState.get("message"), action) {
    switch(action.type) {
        case ActionTypes.SAVE_FILTER_STATE_SUCCESS: 
            return state.setMessage(action.message);
        case ActionTypes.SAVE_FILTER_STATE_ERROR: 
        case ActionTypes.FETCH_FILTER_STATE_ERROR:
            return state.setError(action.error);
        case ActionTypes.SAVE_FILTER_STATE_REQUEST: 
        case ActionTypes.FETCH_FILTER_STATE_REQUEST:
        default:
            return state; 
    }
}