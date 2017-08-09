import Search from "components/search/search";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { toggleRow, toggleFilterSort, changeFilterText, changeFilterType } from "actions/common";
import { selectFilterConfig } from "selectors/filter-config";
import { selectVisibleRows, selectChosenRows } from "selectors/domain";
import { selectAllFilters } from "selectors/domain";

const mapDispatchToProps = (dispatch) => {
    return {
        handleItemToggle: rowId => dispatch(toggleRow(rowId)),
        handleFilterTypeChange: type => dispatch(changeFilterType(type)),
        handleTextChange: text => dispatch(changeFilterText(text)),
        handleSortToggle: () => dispatch(toggleFilterSort())
    };
};

export default connect(createSelector(
    selectVisibleRows(),
    selectChosenRows(),
    selectFilterConfig(),
    selectAllFilters(),
    (items, selectedItems, filterConfig, filters) => ({ items, selectedItems, filterConfig, filters })  
), mapDispatchToProps)(Search);
