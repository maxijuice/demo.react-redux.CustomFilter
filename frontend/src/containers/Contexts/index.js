import EntitySection from "../../components/EntitySection";
import { connect } from "react-redux";
import React from "react";
import { toggleTable, toggleTablesChecklist } from "../../actions/common";
import { TABLES } from "../../constants/component-names";
import { selectIsCurrentPopupTables } from "../../selectors/popup";
import {
    selectChosenTables,
    selectVisibleTables
} from "../../selectors/domain";

class Contexts extends React.PureComponent {
    mapItemsForChecklist(items, selectedItems) {
        return items.map(context => ({
                isChecked: selectedItems.includes(context.get("name")),
                label: context.get("name"),
                itemId: context.get("tableId")
            })
        ).valueSeq();
    }

    render() {
        return(
            <EntitySection 
                title={this.props.title}
                checklistEnabled={this.props.checklistEnabled}
                items={this.mapItemsForChecklist(this.props.items, this.props.selectedItems)} 
                selectedItems={this.props.selectedItems}
                onItemToggle={this.props.onItemToggle}
                onSectionClick={this.props.onSectionClick}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: TABLES,
        checklistEnabled: selectIsCurrentPopupTables()(state),
        selectedItems: selectChosenTables()(state),
        items: selectVisibleTables()(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemToggle: id => {
            dispatch(toggleTable(id))
        },
        onSectionClick: () => dispatch(toggleTablesChecklist())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contexts);

