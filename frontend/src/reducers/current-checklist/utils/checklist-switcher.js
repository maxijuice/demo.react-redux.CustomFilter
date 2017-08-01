import { ChecklistRecord } from "../../initial-state";
import { TABLES, DIMENSIONS } from "../../../constants/components";
import { is } from "immutable";

function getNextChecklist(state, toggledComponent) {
    let nextChecklist;

    if (state.hasEnabled() && is(state.currentComponent(), toggledComponent)) {
        nextChecklist = new ChecklistRecord({ enabled: false });
    } else {
        nextChecklist = new ChecklistRecord({ enabled: true, component: toggledComponent })
    }

    return nextChecklist;
}

export const toggleTablesList = (state) => getNextChecklist(state, TABLES);
export const toggleDimensionsList = (state) => getNextChecklist(state, DIMENSIONS);