import { ActionTypes } from "constants/actions";
import PopupRecord from "records/popup";
import { TABLES, DIMENSIONS } from "constants/components";
import { is } from "immutable";

const initialPopupState = new PopupRecord();

export default function PopupReducer(state = initialPopupState, action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_TABLES_POPUP: return getNextPopup(state, TABLES);
        case ActionTypes.TOGGLE_DIMENSIONS_POPUP: return getNextPopup(state, DIMENSIONS);
        default:
            return state;
    }
}

function getNextPopup(state, toggledComponent) {
    let nextPopup;

    if (state.hasEnabled() && is(state.currentComponent(), toggledComponent)) {
        nextPopup = new PopupRecord({ enabled: false });
    } else {
        nextPopup = new PopupRecord({ enabled: true, component: toggledComponent })
    }

    return nextPopup;
}