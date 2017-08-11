import { Map, Record, List } from "immutable";
import { CONTAINS, EQUALS, BEGINS_WITH } from "constants/filter-types";
import MessageRecord from "records/message";

export class FilterConfigRecord extends Record({text: "", filterType: CONTAINS, sortEnabled: false}) {
    text(newTxt) {
        return this.set("text", newTxt);
    }

    type(newType) {
        return this.set("filterType", newType);
    }

    sort() {
        return this.set("sortEnabled", !this.get("sortEnabled"));
    }
}

export class PopupRecord extends Record({enabled: false, component: ""}){
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
        filters: List([CONTAINS, BEGINS_WITH, EQUALS])
    }),
    message: new MessageRecord(),
    currentPopup: new PopupRecord(),
    filterConfig: new FilterConfigRecord()
});

export default initialState;