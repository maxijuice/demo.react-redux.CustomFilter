import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import WidgetPanel from "containers/widget-panel/widget-panel";
import "./widgets-container.css";

export default class WidgetsContainer extends PureComponent {
    static propTypes = {
        amount: PropTypes.number.isRequired
    }

    render() {
        const widgets = Array.from(
            new Array(this.props.amount),
            (val,index) => <WidgetPanel key={index} 
                                        id={index.toString()} 
                                        classNames="widgets-container__item" />
        );

        return(
            <div className="widgets-container">
                { widgets }
            </div>
        );
    }
}