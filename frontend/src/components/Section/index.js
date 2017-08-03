import React from "react";
import PropTypes from 'prop-types';
import Search from "../Search";
import Entity from "../Entity";

export default class Section extends React.PureComponent {
    render() {
        return (
            <div className="popup">
                {this.props.list}
            </div>
        );
    }
}

Section.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.instanceOf(Entity),
        PropTypes.instanceOf(Search)
    ])
};