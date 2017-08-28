import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Widget from "containers/widget/widget";
import "./widgets-container.css";

export default class WidgetsContainer extends PureComponent {
    static propTypes = {
        amount: PropTypes.number.isRequired
    }

    render() {
        const widgets = [];

        for(let i = 0; i < this.props.amount; i++) {
            widgets.push(<Widget key={i} id={i.toString()} classNames="widgets-container__item" />)
        }

        return(
            <div className="widgets-container">
                { widgets }
            </div>
        );
    }
}