import React from "react";
import PropTypes from 'prop-types';
import { getLabelForType } from "constants/filter-types";
import "./dropdown.css";

export default class Dropdown extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleOptionChange = this.changeOptionHandler.bind(this);
    }

    changeOptionHandler(e) {
        e.preventDefault();
        this.props.handleOptionChange(e.target.value);
    }

    render() {
        const optionsMarkup = this.props.options.map(option => (
            <option
                className="dropdown__item"
                value={option}
                selected={option === this.props.selected}
            >
                {getLabelForType(option)}
            </option>
        ));


        return (
            <select
                className="dropdown"
                onChange={this.handleOptionChange}
            >
                {optionsMarkup}
            </select>
        );
    }
}

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string,
    handleOptionChange: PropTypes.func
};