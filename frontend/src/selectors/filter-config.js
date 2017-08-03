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

const selectFilterSort = () => createSelector(
    selectFilterConfig(),
    (filterConfig) => filterConfig.get("sortEnabled")
);

export {
    selectFilterSort,
    selectFilterText,
    selectFilterType
}
