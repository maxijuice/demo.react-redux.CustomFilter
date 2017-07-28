import { combineReducers } from 'redux-immutable';
import filterConfigReducer from "./filterConfig";
import checklistReducer from "./currentChecklist";
import domainReducer from "./domain";

const rootReducer = combineReducers({
    domain: domainReducer,
    filterConfig: filterConfigReducer,
    currentChecklist: checklistReducer
});

export default rootReducer;