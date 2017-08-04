import List from "../../components/List";
import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { toggleRow } from "../../actions/common";
import { selectVisibleRows, selectChosenRows } from "../../selectors/domain";

class Rows extends React.PureComponent {
    mapItemsForList(items, selectedItems) {
        return items.map(row => ({
            isChecked: selectedItems.includes(row.get("name")),
            label: row.get("name"),
            itemId: row.get("rowId")
        })
        ).valueSeq().toArray();
    }

    render() {
        return (
            <List
                items={this.mapItemsForList(this.props.items, this.props.selectedItems)}
                handleItemToggle={this.props.handleItemToggle}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleItemToggle: rowId => dispatch(toggleRow(rowId))
    };
};

export default connect(createSelector(
    selectVisibleRows(),
    selectChosenRows(),
    (items, selectedItems) => ({items, selectedItems})
), mapDispatchToProps)(Rows);