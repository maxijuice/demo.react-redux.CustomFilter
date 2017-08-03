import React from "react";
import PropTypes from 'prop-types';
import List from "../List";

export default class Checklist extends React.PureComponent {
    render() {
        return (
            <div className="popup">
                {this.props.list}
            </div>
        );
    }
}

Checklist.propTypes = {
    list: PropTypes.instanceOf(List)
};