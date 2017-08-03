import React from "react";
import PropTypes from "prop-types";
import Contexts from "../Contexts";
import Dimensions from "../Dimensions";
import { loadEntities } from "../../actions/thunk";
import { connect } from "react-redux";

class FilterWidget extends React.PureComponent {
    componentDidMount() {
        this.props.onMountAction();
    }

    render() {
        return (
            <div className="filter-widget">
                <header className="filter-widget__header"></header>
                <section className="filter-widget__widget-section">
                    <div className="filter-widget__section-alignment"></div>
                    <Contexts />
                </section>
                <section className="filter-widget__widget-section">
                    <div className="filter-widget__section-alignment"></div>
                    <Dimensions />
                </section>
                <section className="filter-widget__widget-section search"></section>

                
                <footer className="filter-widget__footer"></footer>
            </div>
        );
    }
}

FilterWidget.propTypes = {
    onMountAction: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMountAction: () => dispatch(loadEntities())
    }
};

export default connect( 
    null,
    mapDispatchToProps
)(FilterWidget);