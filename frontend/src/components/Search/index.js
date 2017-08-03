import React from "react";
import PropTypes from 'prop-types';
import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";

export default class Search extends React.PureComponent {
    render() {
        return (
            <div className="search">
                <div className="search__block">
                    <Input
                        text={this.props.text}
                        handleTextChange={this.props.handleTextChange}
                    />
                </div>
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