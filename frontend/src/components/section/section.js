import React from "react";
import PropTypes from 'prop-types';
import "./section.css";

export default class Section extends React.PureComponent {
    static propTypes = {
        children: PropTypes.any.isRequired
    }

    render() {
        return (
            <div className="section">
                <div className="section__alignment" />
                {this.props.children}
            </div>
        );
    }
}