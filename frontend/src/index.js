import { render } from "react-dom";
import WidgetsContainer from "components/widgets-container/widgets-container";
import React from "react";

render(
    <WidgetsContainer amount={5} />,
    document.getElementById("root")
);