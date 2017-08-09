import Entity from "components/entity/entity";
import { connect } from "react-redux";
import React from "react";
import { createSelector } from "reselect";
import { toggleDimension, toggleDimensionsChecklist } from "actions/common";
import { DIMENSIONS } from "constants/component-names";
import { selectIsCurrentPopupDims } from "selectors/popup";
import { selectChosenDimensions, selectVisibleDimensions } from "selectors/domain";

class Dimensions extends React.PureComponent {
    mapItemsForList(items, selectedItems) {
        return items.map(dim => ({
                isChecked: selectedItems.includes(dim.get("name")),
                label: dim.get("name"),
                itemId: dim.get("dimensionId")
            })
        ).valueSeq().toArray();
    }

    render() {
        return(
            <Entity 
                title={DIMENSIONS}
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
        handleItemToggle: id => dispatch(toggleDimension(id)),
        handleSectionClick: () => dispatch(toggleDimensionsChecklist())
    };
};

export default connect(createSelector(
    selectIsCurrentPopupDims(),
    selectVisibleDimensions(),
    selectChosenDimensions(),
    (popup, items, selectedItems) => ({popup, items, selectedItems})
), mapDispatchToProps)(Dimensions);
