import React from "react";
import PropTypes from 'prop-types';
import Immutable from "immutable";
import ListItem from "components/list-item/list-item";

export default class List extends React.PureComponent {
    static propTypes = {
        items: PropTypes.instanceOf(Immutable.Map),
        classNames: PropTypes.string,
        
        handleItemToggle: PropTypes.func
    }

    render() {
        const checklistItems = this.props.items.map(item => (
            <ListItem
                key={item.get("itemId")}
                item={item}
                handleItemToggle={this.props.handleItemToggle}
            />
        )).valueSeq();

        return (
            <div className={this.props.classNames} >
                {checklistItems}
            </div>
        );
    }
}