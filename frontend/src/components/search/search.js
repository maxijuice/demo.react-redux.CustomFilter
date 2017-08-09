import React from "react";
import PropTypes from 'prop-types';
import Input from "components/input/input";
import Button from "components/button/button";
import Dropdown from "components/dropdown/dropdown";
import Rows from "containers/rows/rows";
import "./search.css";

export default class Search extends React.PureComponent {
    render() {
        return (
            <div className="search">
                <Input
                    text={this.props.text}
                    handleTextChange={this.props.handleTextChange}
                />
                <div className="search__block">
                    <Dropdown
                        options={this.props.filterTypes}
                        selected={this.props.selectedType}
                        handleOptionChange={this.props.handleFilterTypeChange} />
                    <Button
                        enabled={this.props.sortEnabled}
                        handleClick={this.props.handleSortToggle}
                    />
                </div>
                <div className="search__separator"></div>
                <Rows />
            </div>
        );
    }
}

Search.propTypes = {
    sortEnabled: PropTypes.bool,
    text: PropTypes.string,
    filterTypes: PropTypes.arrayOf(PropTypes.string),
    selectedType: PropTypes.string,
    handleFilterTypeChange: PropTypes.func,
    handleTextChange: PropTypes.func,
    handleSortToggle: PropTypes.func
};