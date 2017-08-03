import React from "react";
import PropTypes from 'prop-types';

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