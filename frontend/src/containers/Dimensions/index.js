import EntitySection from "../../components/EntitySection";
import { connect } from "react-redux";
import React from "react";
import { toggleDimension, toggleDimensionsChecklist } from "../../actions/common";
import { DIMENSIONS } from "../../constants/component-names";
import { selectIsCurrentPopupDims } from "../../selectors/popup";
import { selectChosenDimensions, selectVisibleDimensions } from "../../selectors/domain";

class Dimensions extends React.PureComponent {
    mapItemsForChecklist(items, selectedItems) {
        return items.map(dim => ({
                isChecked: selectedItems.includes(dim.get("name")),
                label: dim.get("name"),
                itemId: dim.get("dimensionId")
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
        title: DIMENSIONS,
        checklistEnabled: selectIsCurrentPopupDims()(state),
        selectedItems: selectChosenDimensions()(state),
        items: selectVisibleDimensions()(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemToggle: id => {
            dispatch(toggleDimension(id))
        },
        onSectionClick: () => dispatch(toggleDimensionsChecklist())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dimensions);
