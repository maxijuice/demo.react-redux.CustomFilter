import EntitySection from "../components/EntitySection";
import { connect } from "react-redux";
import { toggleTable, toggleTablesChecklist } from "../actions/common";
import { TABLES } from "../constants/components";

const mapStateToProps = (state) => {
    return {
        title: TABLES,
        checklistEnabled: state.getIn(["currentChecklist", "enabled"]) === true && state.getIn(["currentChecklist", "component"]) === TABLES,
        selectedItems: state.getIn(["domain", "filterResult"]).keySeq()
            .map(tableId => state.getIn(["domain", "entities", "tables", tableId, "name"])).toJS(),
        items: state.getIn(["domain", "entities", "tables"]).valueSeq()
            .map(table => ({
                isChecked: state.getIn(["domain", "filterResult"]).has(table.get("tableId")),
                label: table.get("name"),
                itemId: table.get("tableId")
            })).toJS()
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemToggle: id => {
            dispatch(toggleTable(id))
        },
        onSectionClick: () => dispatch(toggleTablesChecklist())
    };
};

const Contexts = connect(
    mapStateToProps,
    mapDispatchToProps
)(EntitySection);

export default Contexts;