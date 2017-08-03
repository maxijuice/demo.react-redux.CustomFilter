import React from "react";
import PropTypes from 'prop-types';

export default class FilterInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onTextChange = this.textChange.bind(this);
    }

    textChange(e) {
        this.props.onTextChange(e.target.value);
    }

    render() {
        return (
            <div className="checklist-item">
               
            </div>
        );
    }
}

FilterInput.propTypes = {
    isChecked: PropTypes.bool,
    label: PropTypes.string,
    itemId: PropTypes.string,
    onItemToggle: PropTypes.func
};