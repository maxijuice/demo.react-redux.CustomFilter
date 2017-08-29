import React from "react";
import PropTypes from 'prop-types';
import List from "components/list/list";
import Icon from "components/icon/icon";
import Immutable from "immutable";
import { TABLES, DIMENSIONS } from "constants/components";
import { mapTablesForList, mapDimsForList } from "utils/list-mapper";
import "./entity.css";

export default class Entity extends React.PureComponent {
    static propTypes = {
        widgetId: PropTypes.string.isRequired,
        popup: PropTypes.bool.isRequired,
        title: PropTypes.oneOf([ TABLES, DIMENSIONS ]).isRequired,
        selectedItems: PropTypes.instanceOf(Immutable.List).isRequired,
        items: PropTypes.instanceOf(Immutable.Map).isRequired,

        handleItemToggle: PropTypes.func.isRequired,
        handleSectionClick: PropTypes.func.isRequired
    }

    render() {
        let popup;

        if (this.props.popup && this.props.items.size > 0) {
            let mapper = this.props.title === TABLES
                ? mapTablesForList
                : mapDimsForList;

            popup = (
                <List
                    classNames="entity__popup"
                    items={mapper(this.props.items, this.props.selectedItems)}
                    handleItemToggle={this.props.handleItemToggle} 
                />
            );
        }

        return (
            <div className="entity">
                <div className="entity__content" onClick={this.props.handleSectionClick}>
                    <Icon name="chevron-down" classNames="entity__icon" />
                    <span className="entity__title">
                        {this.props.title}
                    </span>
                    <span className="entity__selected-items">
                        {this.props.selectedItems.join()}
                    </span>
                </div>
                {popup}
            </div>
        );
    }
}