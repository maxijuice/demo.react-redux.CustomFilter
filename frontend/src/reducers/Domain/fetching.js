import { fromJS } from "immutable";

export function fetchEntities(state, response) {
    const entities = fromJS(response.entities);

    return state.updateIn(["entities"], map => map.merge(entities));
}

export function fetchState(state, response) {
    const filterResult = fromJS(response);

    return state.updateIn(["filterResult"], map => map.merge(filterResult));
}