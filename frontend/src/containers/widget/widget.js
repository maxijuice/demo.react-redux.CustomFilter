import Panel from "components/panel/panel";
import { connect } from "react-redux";
import { loadEntities } from "actions/thunk";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDataFetching: () => dispatch(loadEntities(ownProps.id)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Panel);