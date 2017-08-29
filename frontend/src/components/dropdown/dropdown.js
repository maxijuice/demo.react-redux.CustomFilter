import React from "react";
import PropTypes from 'prop-types';
import Immutable from "immutable";
import { CONTAINS, BEGINS_WITH, EQUALS, CONTAINS_LABEL, EQUALS_LABEL, BEGINS_WITH_LABEL } from "constants/filters";
import "./dropdown.css";

export default class Dropdown extends React.PureComponent {
    static propTypes = {
        options: PropTypes.instanceOf(Immutable.List).isRequired,
        selected: PropTypes.string.isRequired,
        handleOptionChange: PropTypes.func.isRequired
    }

    getLabelForType = type => {
        switch (type) {
            case CONTAINS: return CONTAINS_LABEL;
            case EQUALS: return EQUALS_LABEL;
            case BEGINS_WITH: return BEGINS_WITH_LABEL;
            default:
                return type;
        }
    }

    handleOptionChange = e => {
        e.preventDefault();
        this.props.handleOptionChange(e.target.value);
    }

    render() {
        const optionsMarkup = this.props.options.map(option => (
            <option 
                key={option}
                className="dropdown__item"
                value={option}>
                {this.getLabelForType(option)}
            </option>
        )).valueSeq();

        return (
            <select
                value={this.props.selected}
                className="dropdown"
                onChange={this.handleOptionChange}
            >
                {optionsMarkup}
            </select>
        );
    }
}