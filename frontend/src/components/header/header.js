import React from "react";
import PropTypes from 'prop-types';
import Icon from "components/icon/icon";
import "./header.css";

export default class Header extends React.PureComponent {
    render() {
        return (
            <div className="header">
                <Icon name="bars" addClass="header__drag-icon" />
                <span className="header__text">
                    Filter
                </span>
                <Icon name="times" onIconClick={this.props.onClose} addClass="header__close-icon" />   
            </div>
        );
    }
}

Header.propTypes = {
    onClose: PropTypes.func
};