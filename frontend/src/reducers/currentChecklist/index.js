import initialState from "../initialState";
import * as ActionTypes from "../../constants/actionTypes";
import { toggleTablesList, toggleDimensionsList } from "./utils/checklistSwitcher";

export default function ChecklistReducer(state = initialState.get("currentChecklist"), action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_TABLES_CHECKLIST: return toggleTablesList(state);
        case ActionTypes.TOGGLE_DIMENSIONS_CHECKLIST: return toggleDimensionsList(state);
        default:
            return state;
    }
}