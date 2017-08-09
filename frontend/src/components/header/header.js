import React from "react";
import PropTypes from 'prop-types';
import Icon from "components/icon/icon";
import "./header.css";

export default class Header extends React.PureComponent {
    static propTypes = {
        handleCloseClick: PropTypes.func
    }

    render() {
        return (
            <div className="header">
                <Icon name="bars" classNames="header__drag-icon" />
                <span className="header__text">
                    Filter
                </span>
                <Icon name="times" onIconClick={this.props.handleCloseClick} classNames="header__close-icon" />   
            </div>
        );
    }
}
