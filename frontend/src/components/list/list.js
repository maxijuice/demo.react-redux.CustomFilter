import React from "react";
import PropTypes from 'prop-types';
import ListItem from "../ListItem";

export default class List extends React.PureComponent {
    render() {
        const checklistItems = this.props.items.map(item => (
            <ListItem
                key={item.itemId}
                isChecked={item.isChecked}
                itemId={item.itemId}
                label={item.label}
                handleItemToggle={this.props.handleItemToggle}
            />
        ));

        return (
            <div className="list">
                {checklistItems}
            </div>
        );
    }
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        isChecked: PropTypes.bool,
        label: PropTypes.string,
        itemId: PropTypes.string
    })),
    handleItemToggle: PropTypes.func
};