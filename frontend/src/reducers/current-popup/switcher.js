import PopupRecord from "records/popup";
import { TABLES, DIMENSIONS } from "constants/components";
import { is } from "immutable";

function getNextPopup(state, toggledComponent) {
    let nextPopup;

    if (state.hasEnabled() && is(state.currentComponent(), toggledComponent)) {
        nextPopup = new PopupRecord({ enabled: false });
    } else {
        nextPopup = new PopupRecord({ enabled: true, component: toggledComponent })
    }

    return nextPopup;
}

export const toggleTablesPopup = (state) => getNextPopup(state, TABLES);
export const toggleDimensionsPopup = (state) => getNextPopup(state, DIMENSIONS);