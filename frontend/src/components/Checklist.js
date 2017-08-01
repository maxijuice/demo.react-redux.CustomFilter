import React from "react";
import PropTypes from 'prop-types';
import ChecklistItem from "./ChecklistItem";

export default class Checklist extends React.PureComponent {
    render() {
        const checklistItems = this.props.items.map(item => (
            <ChecklistItem
                isChecked={item.isChecked}
                itemId={item.itemId}
                label={item.label}
                onItemToggle={this.props.onItemToggle}
            />
        ));

        return (
            <div className="checklist">
                {checklistItems}
            </div>
        );
    }
}

Checklist.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onItemToggle: PropTypes.func
};