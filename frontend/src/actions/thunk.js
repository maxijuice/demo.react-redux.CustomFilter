import {
    fetchEntities, fetchEntitiesSuccess, fetchEntitiesError,
    saveState, saveStateSuccess, saveStateError,
    fetchState, fetchStateSuccess, fetchStateError
} from "./common";
import normalize from "normalization/normalize";

export function loadEntities() {
    return function (dispatch) {
        dispatch(fetchEntities());
        fetch("http://localhost:3000/data")
            .then(
            response => response.json(),
            error => dispatch(fetchEntitiesError(error))
            )
            .then(
            json => dispatch(fetchEntitiesSuccess(normalize(json)))
            )
    };
}

export function uploadFilterState(widgetId) {
    return function (dispatch, getState) {
        dispatch(saveState());
        fetch(`http://localhost:3000/state/${widgetId}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(getState().getIn([ "domain", "filterResult" ]).toJS())
        })
            .then(
            response => response.json()
            )
            .then(
            json => {
                var data = JSON.parse(json);
                data.hasOwnProperty("error")
                    ? dispatch(saveStateError(data.error))
                    : dispatch(saveStateSuccess(data.message));
            })
    }
}

export function loadFilterState(widgetId) {
    return function (dispatch) {
        dispatch(fetchState());
        fetch(`http://localhost:3000/state/${widgetId}`)
            .then(
            response => response.json()
            )
            .then(
            json => {
                var data = JSON.parse(json);
                data.hasOwnProperty("error")
                    ? dispatch(fetchStateError(data.error))
                    : dispatch(fetchStateSuccess(data.result));
            })
    }
}