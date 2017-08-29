import PanelControls from "components/panel-controls/panel-controls";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { uploadFilterState, loadFilterState} from "actions/thunk";
import { selectChosenDimensions, selectChosenRows, selectChosenTables } from "selectors/domain";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSaveState: () => dispatch(uploadFilterState(ownProps.widgetId)),
        handleLoadState: () => dispatch(loadFilterState(ownProps.widgetId))
    };
};

export default connect(createSelector(
    selectChosenTables(),
    selectChosenDimensions(),
    selectChosenRows(),
    (tables, dimensions, rows) => ({tables, dimensions, rows})
), mapDispatchToProps)(PanelControls);