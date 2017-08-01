import { combineReducers } from 'redux-immutable';
import filterConfigReducer from "./filter-config";
import checklistReducer from "./current-checklist";
import domainReducer from "./domain";

const rootReducer = combineReducers({
    domain: domainReducer,
    filterConfig: filterConfigReducer,
    currentChecklist: checklistReducer
});

export default rootReducer;