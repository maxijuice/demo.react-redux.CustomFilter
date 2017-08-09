import React from "react";
import PropTypes from 'prop-types';
import { SORT_LABEL } from "constants/filter-types";
import "./button.css";

export default class Button extends React.PureComponent {
    static propTypes = {
        enabled: PropTypes.bool,
        label: PropTypes.string,
        handleClick: PropTypes.func.isRequired
    }

    static defaultProps = {
        enabled: false,
        label: SORT_LABEL
    }

    handleClick = e => {
        e.preventDefault();
        this.props.handleClick();
    }

    render() {
        return (
            <button
                className={`button ${this.props.enabled ? "button_enabled" : ""}`}
                onClick={this.handleClick}
            >
                {this.props.label}
            </button>
        );
    }
}
