import React from "react";
import PropTypes from 'prop-types';
import List from "../List";
import { TABLES, DIMENSIONS } from "../../constants/component-names";

export default class Entity extends React.PureComponent {
    render() {
        let list;

        if (this.props.popup) {
            list = <List items={this.props.items} onItemToggle={this.props.onItemToggle} />;
        }

        return (
            <div className="entity">
                <div className="entity-section__header" onClick={this.props.onSectionClick}>
                    <div className="entity-section__icon filter-widget__icon">
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <div className="entity-section__label">
                        {this.props.title}
                    </div>
                    <div className="entity-section__selected-items">
                        {this.props.selectedItems.join()}
                    </div>
                </div>
                {list}
            </div>
        );
    }
}

Entity.propTypes = {
    popup: PropTypes.bool,
    title: PropTypes.oneOf([TABLES, DIMENSIONS]),
    selectedItems: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.arrayOf(PropTypes.shape({
        isChecked: PropTypes.bool,
        label: PropTypes.string,
        itemId: PropTypes.string
    })),
    onItemToggle: PropTypes.func,
    onSectionClick: PropTypes.func
};