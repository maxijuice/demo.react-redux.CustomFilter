export function toggleRow(state, rowId) {
    const chosenRows = state.getIn(["filterResult", "rows"]);

    let newDomainState;

    if (chosenRows.includes(rowId)) {
        newDomainState = state.updateIn(["filterResult", "rows"], rows => rows.delete(rows.indexOf(rowId)));
    } else {
        newDomainState = state.updateIn(["filterResult", "rows"], rows => rows.push(rowId));
    }

    return newDomainState;
}

export function toggleDimension(state, dimId) {
    const chosenDims = state.getIn(["filterResult", "dimensions"]);

    let newDomainState;

    if (chosenDims.includes(dimId)) {
        newDomainState = state.updateIn(["filterResult", "dimensions"], dims => dims.delete(dims.indexOf(dimId)));

        const allRows = newDomainState.getIn(["entities", "rows"]);
        newDomainState = newDomainState.updateIn(["filterResult", "rows"], rows => rows.filter(rowId => allRows.get(rowId)["dimension"] === dimId));
    } else {
        newDomainState = state.updateIn(["filterResult", "dimensions"], dims => dims.push(dimId));
    }

    return newDomainState;
}

export function toggleTable(state, tableId) {
    const chosenTables = state.getIn(["filterResult", "tables"]);

    let newDomainState;

    if (chosenTables.includes(tableId)) {
        newDomainState = state.updateIn(["filterResult", "tables"], tables => tables.delete(tables.indexOf(tableId)));

        const allRows = newDomainState.getIn(["entities", "rows"]);
        const allDims = newDomainState.getIn(["entities", "dimensions"]);

        newDomainState = newDomainState.updateIn(["filterResult", "dimensions"], dims => dims.filter(dimId => allDims.get(dimId)["table"] === tableId));
        newDomainState = newDomainState.updateIn(["filterResult", "rows"], rows => rows.filter(rowId => allRows.get(rowId)["table"] === tableId));
    } else {
        newDomainState = state.updateIn(["filterResult", "tables"], tables => tables.push(tableId));
    }

    return newDomainState;
}

