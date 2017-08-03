import { fromJS } from "immutable";

export default function fetchEntities(state, response) {
    const entities = fromJS(response.entities);

    return state.updateIn(["entities"], map => map.merge(entities));
}
