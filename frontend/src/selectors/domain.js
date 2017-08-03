import { createSelector } from "reselect";

const selectAllFilters = () => state => state.getIn(["domain", "filterTypes"]);

const selectAll = (entity) => () => (state) => state.getIn(["domain", "entities", entity]);

const selectAllTables = selectAll("tables");
const selectAllDimensions = selectAll("dimensions");
const selectAllRows = selectAll("rows");

const selectResult = (entity) => () => state => state.getIn(["domain", "filterResult", entity]);

const selectChosenRowsId = selectResult("rows");
const selectChosenDimensionsId = selectResult("dimensions");
const selectChosenTablesId = selectResult("tables");

const selectChosen = (allSelector, chosenIdsSelector) => () => createSelector(
    allSelector(),
    chosenIdsSelector(),
    (all, chosen) => chosen.map(id => all.get(id).get("name"))
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
    (allRows, chosenDims) => allRows.filter(row => chosenDims.includes(row.get("dimension")))
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