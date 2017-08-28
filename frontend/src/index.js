import { render } from "react-dom";
import { Provider } from "react-redux";
import WidgetsContainer from "components/widgets-container/widgets-container";
import React from "react";
import configureStore from "store/configure";

const widgetsAmount = 5;

const store = configureStore(widgetsAmount);

render(
    <Provider store={store}>
        <WidgetsContainer amount={widgetsAmount} />
    </Provider>,
    document.getElementById("root")
);