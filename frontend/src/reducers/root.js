import { combineReducers } from 'redux-immutable';
import filterConfigReducer from "./FilterConfig";
import popupReducer from "./CurrentPopup";
import domainReducer from "./Domain";

const rootReducer = combineReducers({
    domain: domainReducer,
    filterConfig: filterConfigReducer,
    currentPopup: popupReducer
});

export default rootReducer;