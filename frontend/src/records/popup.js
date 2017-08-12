import { Record } from "immutable";

export default class PopupRecord extends Record({enabled: false, component: ""}){
    hasEnabled() {
        return this.enabled;
    }

    currentComponent() {
        return this.component;
    }
}