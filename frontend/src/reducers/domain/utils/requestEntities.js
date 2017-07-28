import { fromJS } from "immutable";

export default function requestEntities(state, response) {
    const entities = fromJS(response.entities);

    return state.updateIn(["entities"], map => map.merge(entities));
}
