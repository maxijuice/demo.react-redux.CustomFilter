import ActionTypes from "constants/actions";

export function toggleTable(tableId) {
    return {
        type: ActionTypes.TOGGLE_TABLE,
        tableId
    };
}

export function toggleDimension(dimensionId) {
    return {
        type: ActionTypes.TOGGLE_DIMENSION,
        dimensionId
    };
}

export function toggleRow(rowId) {
    return {
        type: ActionTypes.TOGGLE_ROW,
        rowId
    };
}

export function toggleTablesChecklist() {
    return {
        type: ActionTypes.TOGGLE_TABLES_POPUP
    };
}

export function toggleDimensionsChecklist() {
    return {
        type: ActionTypes.TOGGLE_DIMENSIONS_POPUP
    };
}

export function changeFilterText(text) {
    return {
        type: ActionTypes.CHANGE_FILTER_TEXT,
        text
    };
}

export function changeFilterType(filterType) {
    return {
        type: ActionTypes.CHANGE_FILTER_TYPE,
        filterType
    };
}

export function toggleFilterSort() {
    return {
        type: ActionTypes.TOGGLE_FILTER_SORT
    };
}

export function fetchEntities() {
    return {
        type: ActionTypes.FETCH_ENTITIES_REQUEST
    };
}

export function fetchEntitiesSuccess(response) {
    return {
        type: ActionTypes.FETCH_ENTITIES_SUCCESS,
        response
    };
}

export function fetchEntitiesError(error) {
    return {
        type: ActionTypes.FETCH_ENTITIES_ERROR,
        error
    };
}

export function saveState() {
    return {
        type: ActionTypes.SAVE_FILTER_STATE_REQUEST
    }
}

export function saveStateSuccess(message) {
    return {
        type: ActionTypes.SAVE_FILTER_STATE_SUCCESS,
        message
    }
}

export function saveStateError(error) {
    return {
        type: ActionTypes.SAVE_FILTER_STATE_ERROR,
        error
    }
}

export function fetchState() {
    return {
        type: ActionTypes.FETCH_FILTER_STATE_REQUEST
    }
}

export function fetchStateSuccess(response) {
    return {
        type: ActionTypes.FETCH_FILTER_STATE_SUCCESS,
        response
    }
}

export function fetchStateError(error) {
    return {
        type: ActionTypes.FETCH_FILTER_STATE_ERROR,
        error
    }
}