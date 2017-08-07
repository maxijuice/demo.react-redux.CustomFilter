import React from "react";
import PropTypes from 'prop-types';
import Icon from "../Icon";
import "./input.css";

export default class Input extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleTextChange = this.textChangeHandler.bind(this);
    }

    textChangeHandler(e) {
        e.preventDefault();
        this.props.handleTextChange(e.target.value);
    }

    render() {
        return (
            <div className="input">
                <Icon name="search" addClass="input__icon" />
                <input 
                    className="input__field"
                    type="text" 
                    value={this.props.text}
                    onChange={this.handleTextChange}    
                />
            </div>
        );
    }
}

Input.propTypes = {
    text: PropTypes.string,
    handleTextChange: PropTypes.func
};