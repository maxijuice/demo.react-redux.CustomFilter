import List from "components/list/list";
import React from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";
import { mapRowsForList} from "utils/list-mapper";
import "./rows-list.css";

export default class RowsList extends React.PureComponent {
    static propTypes = {
        items: PropTypes.instanceOf(Immutable.Map),
        selectedItems: PropTypes.instanceOf(Immutable.List),
        handleItemToggle: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="rows-list">
                <List
                    items={mapRowsForList(this.props.items, this.props.selectedItems)}
                    handleItemToggle={this.props.handleItemToggle}
                />
            </div>
        );
    }
}
