import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./toggle.css";

export default class Toggle extends PureComponent {
    static propTypes = {
        value: PropTypes.bool.isRequired,
        handleToggle: PropTypes.func.isRequired,
        classNames: PropTypes.string
    }

    render() {
        return (
            <label className={`toggle ${this.props.classNames}`}>
                <input className="toggle__checkbox" 
                        type="checkbox" 
                        checked={this.props.value}
                        onChange={this.props.handleToggle}
                 />
                <span className="toggle__slider toggle__slider_round"></span>
            </label>
        )
    }
}