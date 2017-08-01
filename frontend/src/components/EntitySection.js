import React from "react";
import PropTypes from 'prop-types';
import Checklist from "./Checklist";

export default class EntitySection extends React.PureComponent {
    render() {
        let checklist;

        if (this.props.checklistEnabled) {
            checklist = <Checklist items={this.props.items} onItemToggle={this.props.onItemToggle} />;
        }

        return (
            <div className="entity-section">
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
                {checklist}
            </div>
        );
    }
}

EntitySection.propTypes = {
    checklistEnabled: PropTypes.bool,
    title: PropTypes.string,
    selectedItems: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.arrayOf(PropTypes.object),
    onItemToggle: PropTypes.func,
    onSectionClick: PropTypes.func
};