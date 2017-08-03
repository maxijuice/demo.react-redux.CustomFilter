import Entity from "../../components/Entity";
import { connect } from "react-redux";
import React from "react";
import { toggleDimension, toggleDimensionsChecklist } from "../../actions/common";
import { DIMENSIONS } from "../../constants/component-names";
import { selectIsCurrentPopupDims } from "../../selectors/popup";
import { selectChosenDimensions, selectVisibleDimensions } from "../../selectors/domain";

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
                title={this.props.title}
                popup={this.props.popup}
                items={this.mapItemsForList(this.props.items, this.props.selectedItems)} 
                selectedItems={this.props.selectedItems}
                handleItemToggle={this.props.handleItemToggle}
                handleSectionClick={this.props.handleSectionClick}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: DIMENSIONS,
        popup: selectIsCurrentPopupDims()(state),
        selectedItems: selectChosenDimensions()(state),
        items: selectVisibleDimensions()(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleItemToggle: id => dispatch(toggleDimension(id)),
        handleSectionClick: () => dispatch(toggleDimensionsChecklist())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dimensions);
