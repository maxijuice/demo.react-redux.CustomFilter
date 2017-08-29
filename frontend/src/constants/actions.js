import keyMirror from "keymirror";

export const ActionTypes = keyMirror({
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
})
