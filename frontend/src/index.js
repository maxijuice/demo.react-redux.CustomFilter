import configureStore from "./store/configure";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import FilterWidget from "./containers/filter-widget/filter-widget";
import React from "react";

const store = configureStore();

render(
    <Provider store={store}>
        <FilterWidget />
    </Provider>,
    document.getElementById("root")
);