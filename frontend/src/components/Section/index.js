import React from "react";
import PropTypes from 'prop-types';
import Contexts from "../../containers/Contexts";
import Dimensions from "../../containers/Dimensions";

export default class Section extends React.PureComponent {
    render() {
        return (
            <div className="section">
                <div className="section__alignment" />
                {this.props.children}
            </div>
        );
    }
}

Section.propTypes = {
    children: PropTypes.any.isRequired
};