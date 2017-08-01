import { Map, List } from "immutable";

export function toggleDimension(state, dimId) {
    const tables = state.getIn([ "entities", "tables" ]);

    let tableId;

    tables.valueSeq().forEach(tableMap => {
        let dims = tableMap.get("dimensions");

        if (dims.includes(dimId)) {
            tableId = tableMap.get("tableId");
        }
    });

    const selectedDims = state.getIn([ "filterResult", tableId ]);

    let newDomainState;

    if (selectedDims.has(dimId)) {
        newDomainState = state.updateIn([ "filterResult", tableId ], dimsMap => dimsMap.delete(dimId));
    } else {
        newDomainState = state.updateIn([ "filterResult", tableId ], dimsMap => dimsMap.set(dimId, List()));
    }

    return newDomainState;
}

export function toggleTable(state, tableId) {
    const selectedTables = state.get("filterResult");
    let newDomainState;

    if (selectedTables.has(tableId)) {
        newDomainState = state.updateIn([ "filterResult" ], tablesMap => tablesMap.delete(tableId));
    } else {
        newDomainState = state.updateIn([ "filterResult" ], tablesMap => tablesMap.set(tableId, Map()));
    }

    return newDomainState;
}

export function toggleRow(state, rowId) {
    const tables = state.getIn([ "entities", "tables" ]);
    const dims = state.getIn([ "entities", "dimensions" ]);

    let dimId, tableId;

    dims.valueSeq().forEach(dimMap => {
        let rows = dimMap.get("rows");

        if (rows.includes(rowId)) {
            dimId = dimMap.get("dimensionId");
        }
    });

    tables.valueSeq().forEach(tableMap => {
        let dims = tableMap.get("dimensions");

        if (dims.includes(dimId)) {
            tableId = tableMap.get("tableId");
        }
    });

    const selectedRows = state.getIn([ "filterResult", tableId, dimId ]);
    const rowIndex = selectedRows.indexOf(rowId);

    let newDomainState;

    if (rowIndex !== -1) {
        newDomainState = state.updateIn([ "filterResult", tableId, dimId ], rowsList => rowsList.delete(rowIndex));
    } else {
        newDomainState = state.updateIn([ "filterResult", tableId, dimId ], rowsList => rowsList.push(rowId));
    }

    return newDomainState;
}