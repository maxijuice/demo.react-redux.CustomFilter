import { ChecklistRecord } from "../../initialState";
import { TABLES, DIMENSIONS } from "../../../constants/components";
import { is } from "immutable";

function getNextChecklist(state, ...componentNames) {
    const [ toggledComponent, secondComponent ] = componentNames; 
    let nextChecklist;

    if (state.hasEnabled()) {
        if (is(state.currentComponent(), toggledComponent)) {
            nextChecklist = new ChecklistRecord({ enabled: false });
        }

        if (is(state.currentComponent(), secondComponent)) {
            nextChecklist = new ChecklistRecord({ component: toggledComponent })
        }

    } else {
        nextChecklist = new ChecklistRecord({ enabled: true, component: toggledComponent })
    }

    return nextChecklist;
}

export const toggleTablesList = (state) => getNextChecklist(state, TABLES, DIMENSIONS);
export const toggleDimensionsList = (state) => getNextChecklist(state, DIMENSIONS, TABLES);