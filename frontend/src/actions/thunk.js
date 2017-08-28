import {
    fetchEntities, fetchEntitiesSuccess, fetchEntitiesError,
    saveState, saveStateSuccess, saveStateError,
    fetchState, fetchStateSuccess, fetchStateError
} from "./common";
import normalize from "normalization/normalize";

export function loadEntities(widgetId) {
    return function (dispatch) {
        dispatch(fetchEntities(widgetId));
        fetch("http://localhost:3000/data")
            .then(
            response => response.json(),
            error => dispatch(fetchEntitiesError(widgetId, error))
            )
            .then(
            json => dispatch(fetchEntitiesSuccess(widgetId, normalize(json)))
            );
    };
}

export function uploadFilterState(widgetId) {
    return function (dispatch, getState) {
        dispatch(saveState(widgetId));
        fetch(`http://localhost:3000/state/${widgetId}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(getState().getIn([widgetId, "domain", "filterResult" ]).toJS())
        })
            .then(
            response => response.json()
            )
            .then(
            json => {
                var data = JSON.parse(json);
                data.hasOwnProperty("error")
                    ? dispatch(saveStateError(widgetId, data.error))
                    : dispatch(saveStateSuccess(widgetId, data.message));
            });
    };
}

export function loadFilterState(widgetId) {
    return function (dispatch) {
        dispatch(fetchState(widgetId));
        fetch(`http://localhost:3000/state/${widgetId}`)
            .then(
            response => response.json()
            )
            .then(
            json => {
                var data = JSON.parse(json);
                data.hasOwnProperty("error")
                    ? dispatch(fetchStateError(widgetId, data.error))
                    : dispatch(fetchStateSuccess(widgetId, data.result));
            });
    };
}