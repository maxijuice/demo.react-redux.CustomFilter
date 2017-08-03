import Search from "../../components/Search";
import { connect } from "react-redux";
import { toggleFilterSort, changeFilterText, changeFilterType } from "../../actions/common";
import { selectFilterText, selectFilterType, selectIsSortEnabled } from "../../selectors/filter-config";
import { selectAllFilters } from "../../selectors/domain";

const mapStateToProps = (state) => {
    return {
        sortEnabled: selectIsSortEnabled()(state), 
        text: selectFilterText()(state),
        filterTypes: selectAllFilters()(state),
        selectedType: selectFilterType()(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFilterTypeChange: type => dispatch(changeFilterType(type)),
        handleTextChange: text => dispatch(changeFilterText(text)),
        handleSortToggle: () => dispatch(toggleFilterSort())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
