import React from "react";
import PropTypes from 'prop-types';
import ListItemRecord from "records/list-item";
import "./list-item.css";

export default class ListItem extends React.PureComponent {
    static propTypes = {
        item: PropTypes.instanceOf(ListItemRecord).isRequired,
        
        handleItemToggle: PropTypes.func.isRequired
    }

    handleItemToggle = itemId => {
        this.props.handleItemToggle(this.props.item.get("itemId"));
    }

    render() {
        const { item } = this.props;

        return (
            <label className="list-item">
                <input className="list-item__checkbox"
                    type="checkbox"
                    checked={item.get("isChecked")}
                    onChange={this.handleItemToggle}
                />
                <span className="list-item__text">
                    {item.get("label")}
                </span>
            </label>
        );
    }
}