import React from "react";
import PropTypes from 'prop-types';
import Icon from "../Icon";

export default class Button extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        e.preventDefault();
        this.props.handleClick();
    }

    render() {
        return (
            <button className="button" onClick={this.handleClick}>
                {this.props.label}
            </button>
        );
    }
}

Button.propTypes = {
    label: PropTypes.string,
    handleClick: PropTypes.func
};