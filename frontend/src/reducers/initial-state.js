import { Map, Record } from "immutable";
import { CONTAINS } from "../constants/filter-types";

export const FilterConfigRecord = Record({
    text: "",
    filterType: CONTAINS,
    sortEnabled: false
});

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
        filterResult: Map(),
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