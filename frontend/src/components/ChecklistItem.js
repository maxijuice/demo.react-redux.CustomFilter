import React from "react";
import PropTypes from 'prop-types';

export default class ChecklistItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onItemToggle = this.toggleItem.bind(this);
    }

    toggleItem(itemId) {
        this.props.onItemToggle(this.props.itemId);
    }

    render() {
        return (
            <div className="checklist-item">
                <label className="checklist-item__label">
                    <input className="checklist-item__checkbox"
                        type="checkbox"
                        checked={this.props.isChecked}
                        onChange={this.onItemToggle}
                    />
                    {this.props.label}
                </label>
            </div>
        );
    }
}

ChecklistItem.propTypes = {
    isChecked: PropTypes.bool,
    label: PropTypes.string,
    itemId: PropTypes.string,
    onItemToggle: PropTypes.func
};