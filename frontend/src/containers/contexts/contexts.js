import Entity from "components/entity/entity";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { toggleTable, toggleTablesChecklist } from "actions/common";
import { TABLES } from "constants/component-names";
import { selectIsCurrentPopupTables } from "selectors/popup";
import {
    selectChosenTables,
    selectVisibleTables
} from "selectors/domain";

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
    (popup, items, selectedItems) => ({ popup, items, selectedItems, title: TABLES })
), mapDispatchToProps)(Entity);

