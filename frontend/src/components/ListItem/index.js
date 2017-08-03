import React from "react";
import PropTypes from 'prop-types';

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
            <div className="list-item">
                <label className="list-item__label">
                    <input className="list-item__checkbox"
                        type="checkbox"
                        checked={this.props.isChecked}
                        onChange={this.handleItemToggle}
                    />
                    {this.props.label}
                </label>
            </div>
        );
    }
}

ListItem.propTypes = {
    isChecked: PropTypes.bool,
    label: PropTypes.string,
    itemId: PropTypes.string,
    handleItemToggle: PropTypes.func
};