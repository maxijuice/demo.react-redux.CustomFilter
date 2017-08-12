import { Record } from "immutable";
import { CONTAINS } from "constants/filters";

export default class FilterConfigRecord extends Record({text: "", filterType: CONTAINS, sortEnabled: false}) {
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
