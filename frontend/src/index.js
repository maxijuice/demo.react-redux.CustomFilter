import configureStore from "./store/configure";
import { loadEntities } from "./actions/thunk";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import FilterWidget from "./components/FilterWidget";
import React from "react";
import * as FilterTypes from "./constants/filter-types";
import { toggleTable, toggleDimension, toggleRow,
        toggleDimensionsChecklist, toggleTablesChecklist, 
        changeFilterText, changeFilterSort, changeFilterType } from "./actions/common";

const store = configureStore();

store.dispatch(loadEntities());

render(
    <Provider store={store}>
        <FilterWidget />
    </Provider>,
    document.getElementById("root")
);

// setTimeout(() => {
//     store.dispatch(toggleTable("1"));
//     store.dispatch(toggleTable("2"));

//     store.dispatch(toggleTable("1"));

//     store.dispatch(toggleDimension("20"));

//     store.dispatch(toggleRow("121"));
//     store.dispatch(toggleRow("122"));
//     store.dispatch(toggleRow("123"));
//     store.dispatch(toggleRow("123"));
//     store.dispatch(toggleRow("122"));

//     store.dispatch(toggleDimension("20"));

//     store.dispatch(toggleTable("1"));

//     store.dispatch(toggleDimensionsChecklist());
//     store.dispatch(toggleTablesChecklist());
//     store.dispatch(toggleTablesChecklist());

//     store.dispatch(changeFilterSort(true));
//     store.dispatch(changeFilterText("sec"));
//     store.dispatch(changeFilterType(FilterTypes.EQUALS));
//     store.dispatch(changeFilterType(FilterTypes.BEGINS_WITH));

// }, 500);
