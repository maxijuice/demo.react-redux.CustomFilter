import configureStore from "./store/configure";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import FilterWidget from "./containers/FilterWidget/";
import React from "react";
import { changeFilterText, changeFilterType, toggleFilterSort } from "./actions/common";

const store = configureStore();

render(
    <Provider store={store}>
        <FilterWidget />
    </Provider>,
    document.getElementById("root")
);

store.dispatch(changeFilterText("src"));
store.dispatch(changeFilterType("EQUALS"));
store.dispatch(toggleFilterSort(true));

store.dispatch(toggleFilterSort(false));
store.dispatch(changeFilterText("val"));