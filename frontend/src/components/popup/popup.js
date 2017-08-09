import React from "react";
import PropTypes from 'prop-types';
import List from "components/list/list";
import "./popup.css";

export default class Popup extends React.PureComponent {
    render() {
        return (
            <div className={`popup ${this.props.addClass}`}>
                {this.props.children}
            </div>
        );
    }
}

Popup.propTypes = {
    children: PropTypes.instanceOf(List)
};