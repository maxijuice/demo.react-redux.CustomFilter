import { fetchEntities, fetchEntitiesSuccess, fetchEntitiesError } from "./common";
import normalize from "../normalization/normalize"; 

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

export function uploadFilterState() {
    return function (dispatch) {
        dispatch()
    }
}