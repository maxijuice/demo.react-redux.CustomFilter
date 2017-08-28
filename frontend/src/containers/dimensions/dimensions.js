import Entity from "components/entity/entity";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { toggleDimension, toggleDimensionsChecklist } from "actions/common";
import { DIMENSIONS } from "constants/components";
import { selectIsCurrentPopupDims } from "selectors/popup";
import { selectChosenDimensions, selectVisibleDimensions } from "selectors/domain";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleItemToggle: itemId => dispatch(toggleDimension(ownProps.widgetId, itemId)),
        handleSectionClick: () => dispatch(toggleDimensionsChecklist(ownProps.widgetId))
    };
};

export default connect(createSelector(
    selectIsCurrentPopupDims(),
    selectVisibleDimensions(),
    selectChosenDimensions(),
    (popup, items, selectedItems) => ({popup, items, selectedItems, title: DIMENSIONS})
), mapDispatchToProps)(Entity);
