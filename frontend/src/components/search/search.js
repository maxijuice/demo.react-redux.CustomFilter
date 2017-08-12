import React from "react";
import PropTypes from 'prop-types';
import Input from "components/input/input";
import Button from "components/button/button";
import Dropdown from "components/dropdown/dropdown";
import List from "components/list/list";
import { mapRowsForList } from "utils/list-mapper";
import Immutable from "immutable";
import FilterConfigRecord from "records/filter-config"; 
import "./search.css";

export default class Search extends React.PureComponent {
    static propTypes = {
        items: PropTypes.instanceOf(Immutable.Map).isRequired,
        selectedItems: PropTypes.instanceOf(Immutable.List).isRequired,
        filterConfig: PropTypes.instanceOf(FilterConfigRecord).isRequired,
        filters: PropTypes.instanceOf(Immutable.List).isRequired,
        handleItemToggle: PropTypes.func.isRequired,
        handleFilterTypeChange: PropTypes.func.isRequired,
        handleTextChange: PropTypes.func.isRequired,
        handleSortToggle: PropTypes.func.isRequired
    }

    render() {
        const { filterConfig } = this.props;

        return (
            <div className="search">
                <Input
                    text={filterConfig.get("text")}
                    handleTextChange={this.props.handleTextChange}
                />
                <div className="search__block">
                    <Dropdown
                        options={this.props.filters}
                        selected={filterConfig.get("filterType")}
                        handleOptionChange={this.props.handleFilterTypeChange} />
                    <Button
                        enabled={filterConfig.get("sortEnabled")}
                        handleClick={this.props.handleSortToggle}
                    />
                </div>
                <div className="search__separator"></div>
                <List 
                    classNames="search__result"
                    items={mapRowsForList(this.props.items, this.props.selectedItems)}
                    handleItemToggle={this.props.handleItemToggle}
                />
            </div>
        );
    }
}