import { createSelector } from "reselect";
import { selectFilterText, selectFilterType, selectIsSortEnabled } from "./filter-config";
import { CONTAINS, BEGINS_WITH, EQUALS } from "constants/filter-types";

const selectAllFilters = () => state => state.getIn([ "domain", "filters" ]);

const selectAll = (entity) => () => (state) => state.getIn([ "domain", "entities", entity ]);

const selectAllTables = selectAll("tables");
const selectAllDimensions = selectAll("dimensions");
const selectAllRows = selectAll("rows");

const selectResult = (entity) => () => state => state.getIn([ "domain", "filterResult", entity ]);

const selectChosenRowsId = selectResult("rows");
const selectChosenDimensionsId = selectResult("dimensions");
const selectChosenTablesId = selectResult("tables");

const selectChosen = (allSelector, chosenIdsSelector) => () => createSelector(
    allSelector(),
    chosenIdsSelector(),
    (all, chosen) => chosen.map(id => all.getIn([id, "name"]))
)

const selectChosenRows = selectChosen(selectAllRows, selectChosenRowsId);
const selectChosenDimensions = selectChosen(selectAllDimensions, selectChosenDimensionsId);
const selectChosenTables = selectChosen(selectAllTables, selectChosenTablesId);

const selectVisibleTables = selectAllTables;

const selectVisibleDimensions = () => createSelector(
    selectAllDimensions(),
    selectChosenTablesId(),
    (allDims, chosenTables) => allDims.filter(dim => chosenTables.includes(dim.get("table")))
);

const selectVisibleRows = () => createSelector(
    selectAllRows(),
    selectChosenDimensionsId(),
    selectFilterText(),
    selectFilterType(),
    selectIsSortEnabled(),
    (allRows, chosenDims, text, type, sort) => {
        let filteredRows = allRows.filter(row => chosenDims.includes(row.get("dimension")));

        if (text) {
            const filter = text.toLowerCase();

            switch (type) {
                case CONTAINS:
                    filteredRows = filteredRows.filter(row => row.get("name").toLowerCase().includes(filter));
                    break;
                case BEGINS_WITH:
                    filteredRows = filteredRows.filter(row => row.get("name").toLowerCase().startsWith(filter));
                    break;
                case EQUALS:
                    filteredRows = filteredRows.filter(row => row.get("name").toLowerCase() === filter)
                    break;
                default:
            }
        }

        if (sort) {
            filteredRows = filteredRows.sort((rowA, rowB) => {
                const nameA = rowA.get("name").toLowerCase();
                const nameB = rowB.get("name").toLowerCase();

                if (nameA > nameB) { return 1; }
                if (nameA < nameB) { return -1; }

                return 0;
            });
        }

        return filteredRows;
    }
);

export {
    selectAllFilters,
    selectChosenRows,
    selectChosenDimensions,
    selectChosenTables,
    selectVisibleRows,
    selectVisibleDimensions,
    selectVisibleTables
}