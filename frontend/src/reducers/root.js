import { combineReducers } from 'redux-immutable';
import filterConfigReducer from "./FilterConfig";
import checklistReducer from "./CurrentChecklist";
import domainReducer from "./Domain";

const rootReducer = combineReducers({
    domain: domainReducer,
    filterConfig: filterConfigReducer,
    currentChecklist: checklistReducer
});

export default rootReducer;