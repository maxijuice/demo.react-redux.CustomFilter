import { Map, Record, List } from "immutable";
import { CONTAINS } from "../constants/filter-types";

export class FilterConfigRecord extends Record({text: "", filterType: CONTAINS, sortEnabled: false}) {
    text(newTxt) {
        return this.set("text", newTxt);
    }

    type(newType) {
        return this.set("filterType", newType);
    }

    sort(isEnabled) {
        return this.set("sortEnabled", isEnabled);
    }
}

export class ChecklistRecord extends Record({enabled: false, component: ""}){
    hasEnabled() {
        return this.enabled;
    }

    currentComponent() {
        return this.component;
    }
}

const initialState = Map({
    domain: Map({
        filterResult: Map({
            tables: List(),
            dimensions: List(),
            rows: List()
        }),
        entities: Map({
            tables: Map(),
            dimensions: Map(),
            rows: Map()
        }),
    }),
    currentChecklist: new ChecklistRecord(),
    filterConfig: new FilterConfigRecord()
});

export default initialState;