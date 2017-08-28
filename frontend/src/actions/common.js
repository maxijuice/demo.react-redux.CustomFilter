import ActionTypes from "constants/actions";

export function toggleTable(widgetId, tableId) {
    return {
        type: ActionTypes.TOGGLE_TABLE,
        tableId,
        widgetId
    };
}

export function toggleDimension(widgetId, dimensionId) {
    return {
        type: ActionTypes.TOGGLE_DIMENSION,
        dimensionId,
        widgetId
    };
}

export function toggleRow(widgetId, rowId) {
    return {
        type: ActionTypes.TOGGLE_ROW,
        rowId,
        widgetId
    };
}

export function toggleTablesChecklist(widgetId) {
    return {
        type: ActionTypes.TOGGLE_TABLES_POPUP,
        widgetId
    };
}

export function toggleDimensionsChecklist(widgetId) {
    return {
        type: ActionTypes.TOGGLE_DIMENSIONS_POPUP,
        widgetId
    };
}

export function changeFilterText(widgetId, text) {
    return {
        type: ActionTypes.CHANGE_FILTER_TEXT,
        text,
        widgetId
    };
}

export function changeFilterType(widgetId, filterType) {
    return {
        type: ActionTypes.CHANGE_FILTER_TYPE,
        filterType,
        widgetId
    };
}

export function toggleFilterSort(widgetId) {
    return {
        type: ActionTypes.TOGGLE_FILTER_SORT,
        widgetId
    };
}

export function fetchEntities(widgetId) {
    return {
        type: ActionTypes.FETCH_ENTITIES_REQUEST,
        widgetId
    };
}

export function fetchEntitiesSuccess(widgetId, response) {
    return {
        type: ActionTypes.FETCH_ENTITIES_SUCCESS,
        response,
        widgetId
    };
}

export function fetchEntitiesError(widgetId, error) {
    return {
        type: ActionTypes.FETCH_ENTITIES_ERROR,
        error,
        widgetId
    };
}

export function saveState(widgetId) {
    return {
        type: ActionTypes.SAVE_FILTER_STATE_REQUEST,
        widgetId
    }
}

export function saveStateSuccess(widgetId, message) {
    return {
        type: ActionTypes.SAVE_FILTER_STATE_SUCCESS,
        message,
        widgetId
    }
}

export function saveStateError(widgetId, error) {
    return {
        type: ActionTypes.SAVE_FILTER_STATE_ERROR,
        error,
        widgetId
    }
}

export function fetchState(widgetId) {
    return {
        type: ActionTypes.FETCH_FILTER_STATE_REQUEST,
        widgetId
    }
}

export function fetchStateSuccess(widgetId, response) {
    return {
        type: ActionTypes.FETCH_FILTER_STATE_SUCCESS,
        response,
        widgetId
    }
}

export function fetchStateError(widgetId, error) {
    return {
        type: ActionTypes.FETCH_FILTER_STATE_ERROR,
        error,
        widgetId
    }
}