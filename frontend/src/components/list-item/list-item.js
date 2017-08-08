import React from "react";
import PropTypes from 'prop-types';
import "./list-item.css";

export default class ListItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleItemToggle = this.itemToggleHandler.bind(this);
    }

    itemToggleHandler(itemId) {
        this.props.handleItemToggle(this.props.itemId);
    }

    render() {
        return (
            <label className="list-item">
                <input className="list-item__checkbox"
                    type="checkbox"
                    checked={this.props.isChecked}
                    onChange={this.handleItemToggle}
                />
                <span className="list-item__text">
                    {this.props.label}
                </span>
            </label>
        );
    }
}

ListItem.propTypes = {
    isChecked: PropTypes.bool,
    label: PropTypes.string,
    itemId: PropTypes.string,
    handleItemToggle: PropTypes.func
};