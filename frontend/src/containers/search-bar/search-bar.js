import Search from "../../components/Search";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { toggleFilterSort, changeFilterText, changeFilterType } from "../../actions/common";
import { selectFilterText, selectFilterType, selectIsSortEnabled } from "../../selectors/filter-config";
import { selectAllFilters } from "../../selectors/domain";

const mapDispatchToProps = (dispatch) => {
    return {
        handleFilterTypeChange: type => dispatch(changeFilterType(type)),
        handleTextChange: text => dispatch(changeFilterText(text)),
        handleSortToggle: () => dispatch(toggleFilterSort())
    };
};

export default connect(createSelector(
    selectIsSortEnabled(),
    selectFilterText(),
    selectAllFilters(),
    selectFilterType(),
    (sortEnabled, text, filterTypes, selectedType) => ({ sortEnabled, text, filterTypes, selectedType })  
), mapDispatchToProps)(Search);
