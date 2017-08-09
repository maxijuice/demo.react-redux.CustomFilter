import React from "react";
import PropTypes from 'prop-types';
import Icon from "components/icon/icon";
import "./input.css";

export default class Input extends React.PureComponent {
    static propTypes = {
        text: PropTypes.string.isRequired,
        handleTextChange: PropTypes.func.isRequired
    }

    handleTextChange = e => {
        e.preventDefault();
        this.props.handleTextChange(e.target.value);
    }

    render() {
        return (
            <div className="input">
                <Icon name="search" classNames="input__icon" />
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