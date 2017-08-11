import { render } from "react-dom";
import WidgetsContainer from "components/widgets-container/widgets-container";
import React from "react";

render(
    <WidgetsContainer amount={20} />,
    document.getElementById("root")
);