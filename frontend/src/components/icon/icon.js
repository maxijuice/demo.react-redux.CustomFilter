import React from "react";
import PropTypes from "prop-types";

export default class Icon extends React.PureComponent {
    static propTypes = {
    name: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    onIconClick: PropTypes.func
    }

    render() {
        return (
            <i className={`fa fa-${this.props.name} ${this.props.classNames}`} aria-hidden="true"
                onClick={this.props.onIconClick}
             />
        );
    }
}