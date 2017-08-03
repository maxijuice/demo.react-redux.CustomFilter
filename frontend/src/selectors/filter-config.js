import { createSelector } from "reselect";

const selectFilterConfig = () => (state) => state.get("filterConfig");

const selectFilterText = () => createSelector(
    selectFilterConfig(),
    (filterConfig) => filterConfig.get("text")
);

const selectFilterType = () => createSelector(
    selectFilterConfig(),
    (filterConfig) => filterConfig.get("filterType")
);

const selectIsSortEnabled = () => createSelector(
    selectFilterConfig(),
    (filterConfig) => filterConfig.get("sortEnabled")
);

export {
    selectIsSortEnabled,
    selectFilterText,
    selectFilterType
}
