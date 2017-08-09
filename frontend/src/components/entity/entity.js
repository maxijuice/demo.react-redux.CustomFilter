import React from "react";
import PropTypes from 'prop-types';
import List from "components/list/list";
import Icon from "components/icon/icon";
import Popup from "components/popup/popup";
import Immutable from "immutable";
import { TABLES, DIMENSIONS } from "constants/component-names";
import "./entity.css";

export default class Entity extends React.PureComponent {
    render() {
        let popup;

        if (this.props.popup && this.props.items.length > 0) {
            const list = <List items={this.props.items} handleItemToggle={this.props.handleItemToggle} />;
            popup = (<Popup addClass="entity__popup">{list}</Popup>);
        }

        return (
            <div className="entity">
                <div className="entity__content" onClick={this.props.handleSectionClick}>
                    <Icon name="chevron-down" addClass="entity__icon" />
                    <span className="entity__title">
                        {this.props.title}
                    </span>
                    <span className="entity__selected-items">
                        {this.props.selectedItems.join()}
                    </span>
                </div>
                { popup }
            </div>
        );
    }
}

Entity.propTypes = {
    popup: PropTypes.bool,
    title: PropTypes.oneOf([ TABLES, DIMENSIONS ]),
    selectedItems: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.instanceOf(Immutable.Iterable)
    ]),
    items: PropTypes.arrayOf(PropTypes.shape({
        isChecked: PropTypes.bool,
        label: PropTypes.string,
        itemId: PropTypes.string
    })),
    handleItemToggle: PropTypes.func,
    handleSectionClick: PropTypes.func
};