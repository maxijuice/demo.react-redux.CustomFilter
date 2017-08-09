import React from "react";
import PropTypes from 'prop-types';
import Input from "components/input/input";
import Button from "components/button/button";
import Dropdown from "components/dropdown/dropdown";
import RowsList from "components/rows-list/rows-list";
import Immutable, { List } from "immutable";
import {FilterConfigRecord} from "reducers/initial-state"; 
import "./search.css";

export default class Search extends React.PureComponent {
    static propTypes = {
        items: PropTypes.instanceOf(Immutable.Map),
        selectedItems: PropTypes.instanceOf(Immutable.List),
        filterConfig: PropTypes.instanceOf(FilterConfigRecord).isRequired,
        filters: PropTypes.instanceOf(List).isRequired,
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
                <RowsList 
                    items={this.props.items}
                    selectedItems={this.props.selectedItems}
                    handleItemToggle={this.props.handleItemToggle}
                />
            </div>
        );
    }
}