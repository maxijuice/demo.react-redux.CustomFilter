import * as ActionTypes from "../constants/action-types";

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
        type: ActionTypes.TOGGLE_TABLES_CHECKLIST
    };
}

export function toggleDimensionsChecklist() {
    return {
        type: ActionTypes.TOGGLE_DIMENSIONS_CHECKLIST
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