import keyMirror from "keymirror";

const ActionTypes = keyMirror({
    // Entities toggling
    TOGGLE_TABLE: null,
    TOGGLE_DIMENSION: null,
    TOGGLE_ROW: null,
    
    // Filters 
    CHANGE_FILTER_TEXT: null,
    CHANGE_FILTER_TYPE: null,
    TOGGLE_FILTER_SORT: null,
    
    // Popup
    TOGGLE_TABLES_POPUP: null,
    TOGGLE_DIMENSIONS_POPUP: null,
    
    // Entities fetching
    FETCH_ENTITIES_REQUEST: null,
    FETCH_ENTITIES_SUCCESS: null,
    FETCH_ENTITIES_ERROR: null,
    
    // Saving state
    SAVE_FILTER_STATE_REQUEST: null,
    SAVE_FILTER_STATE_SUCCESS: null,
    SAVE_FILTER_STATE_ERROR: null,
    
    // Restoring state
    FETCH_FILTER_STATE_REQUEST: null,
    FETCH_FILTER_STATE_SUCCESS: null,
    FETCH_FILTER_STATE_ERROR: null
});


export const TOGGLE_TABLE = "TOGGLE_TABLE";
export const TOGGLE_DIMENSION = "TOGGLE_DIMENSION";
export const TOGGLE_ROW = "TOGGLE_ROW";

export const CHANGE_FILTER_TEXT = "CHANGE_FILTER_TEXT";
export const CHANGE_FILTER_TYPE = "CHANGE_FILTER_TYPE";
export const TOGGLE_FILTER_SORT = "TOGGLE_FILTER_SORT";

export const TOGGLE_TABLES_POPUP = "TOGGLE_TABLES_POPUP";
export const TOGGLE_DIMENSIONS_POPUP = "TOGGLE_DIMENSIONS_POPUP";

// Async action types

export const FETCH_ENTITIES_REQUEST = "FETCH_ENTITIES";
export const FETCH_ENTITIES_SUCCESS = "FETCH_ENTITIES_SUCCESS";
export const FETCH_ENTITIES_ERROR = "FETCH_ENTITIES_ERROR";

export const SAVE_FILTER_STATE_REQUEST = "SAVE_FILTER_STATE";
export const SAVE_FILTER_STATE_SUCCESS = "SAVE_FILTER_STATE_SUCCESS";
export const SAVE_FILTER_STATE_ERROR = "SAVE_FILTER_STATE_FAILURE";

export const FETCH_FILTER_STATE_REQUEST = "FETCH_FILTER_STATE";
export const FETCH_FILTER_STATE_SUCCESS = "FETCH_FILTER_STATE_SUCCESS";
export const FETCH_FILTER_STATE_ERROR = "FETCH_FILTER_STATE_FAILURE";

export default ActionTypes;
