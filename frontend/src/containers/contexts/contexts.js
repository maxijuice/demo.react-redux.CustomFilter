import Entity from "components/entity/entity";
import { connect } from "react-redux";
import React from "react";
import { createSelector } from "reselect";
import { toggleTable, toggleTablesChecklist } from "actions/common";
import { TABLES } from "constants/component-names";
import { selectIsCurrentPopupTables } from "selectors/popup";
import {
    selectChosenTables,
    selectVisibleTables
} from "../../selectors/domain";

class Contexts extends React.PureComponent {
    mapItemsForList(items, selectedItems) {
        return items.map(context => ({
                isChecked: selectedItems.includes(context.get("name")),
                label: context.get("name"),
                itemId: context.get("tableId")
            })
        ).valueSeq().toArray();
    }

    render() {
        return(
            <Entity 
                title={TABLES}
                popup={this.props.popup}
                items={this.mapItemsForList(this.props.items, this.props.selectedItems)} 
                selectedItems={this.props.selectedItems}
                handleItemToggle={this.props.handleItemToggle}
                handleSectionClick={this.props.handleSectionClick}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleItemToggle: id => dispatch(toggleTable(id)),
        handleSectionClick: () => dispatch(toggleTablesChecklist())
    };
};

export default connect(createSelector(
    selectIsCurrentPopupTables(),
    selectVisibleTables(),
    selectChosenTables(),
    (popup, items, selectedItems) => ({ popup, items, selectedItems })
), mapDispatchToProps)(Contexts);

