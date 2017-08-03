import { createSelector } from "reselect";
import { TABLES, DIMENSIONS } from "../constants/component-names";

const selectCurrentPopup = () => (state) => state.get("currentPopup");

const selectCurrentPopupComponent = () => createSelector(
    selectCurrentPopup(),
    (popup) => popup.get("component")
);

const selectCurrentPopupEnabled = () => createSelector(
    selectCurrentPopup(),
    (popup) => popup.get("enabled")
);

const selectIsCurrentPopup = (componentName) => () => createSelector(
    selectCurrentPopupComponent(),
    selectCurrentPopupEnabled(),
    (component, enabled) => enabled && component === componentName
);

export const selectIsCurrentPopupTables = selectIsCurrentPopup(TABLES);
export const selectIsCurrentPopupDims = selectIsCurrentPopup(DIMENSIONS);

