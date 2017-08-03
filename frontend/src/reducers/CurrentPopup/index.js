import initialState from "../initial-state";
import * as ActionTypes from "../../constants/action-types";
import { toggleTablesList, toggleDimensionsList } from "./switcher";

export default function PopupReducer(state = initialState.get("currentPopup"), action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_TABLES_CHECKLIST: return toggleTablesList(state);
        case ActionTypes.TOGGLE_DIMENSIONS_CHECKLIST: return toggleDimensionsList(state);
        default:
            return state;
    }
}