import Entity from "components/entity/entity";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { toggleTable, toggleTablesChecklist } from "actions/common";
import { TABLES } from "constants/components";
import { selectIsCurrentPopupTables } from "selectors/popup";
import { selectChosenTables, selectVisibleTables} from "selectors/domain";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleItemToggle: (itemId) => dispatch(toggleTable(ownProps.widgetId, itemId)),
        handleSectionClick: () => dispatch(toggleTablesChecklist(ownProps.widgetId))
    };
};

export default connect(createSelector(
    selectIsCurrentPopupTables(),
    selectVisibleTables(),
    selectChosenTables(),
    (popup, items, selectedItems) => ({ popup, items, selectedItems, title: TABLES })
), mapDispatchToProps)(Entity);

