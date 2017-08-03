import React from "react";
import PropTypes from "prop-types";

export default class Icon extends React.PureComponent {
    render() {
        return (
            <i className={`fa fa-${this.props.name} ${this.props.addClass}`} aria-hidden="true"
                onClick={this.props.onIconClick}
             />
        );
    }
}

Icon.propTypes = {
    name: PropTypes.string,
    addClass: PropTypes.string,
    onIconClick: PropTypes.func
};