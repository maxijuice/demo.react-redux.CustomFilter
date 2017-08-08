import { combineReducers } from 'redux-immutable';
import filterConfigReducer from "./filter-config/filter-config";
import popupReducer from "./current-popup/current-popup";
import domainReducer from "./domain/domain";

const rootReducer = combineReducers({
    domain: domainReducer,
    filterConfig: filterConfigReducer,
    currentPopup: popupReducer
});

export default rootReducer;