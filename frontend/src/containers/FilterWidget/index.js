import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import Contexts from "../Contexts";
import Dimensions from "../Dimensions";
import Section from "../../components/Section";
import Header from "../../components/Header";
import { loadEntities } from "../../actions/thunk";
import { connect } from "react-redux";

class FilterWidget extends React.PureComponent {
    componentDidMount() {
        this.props.handleMount();
    }

    render() {
        return (
            <Draggable handle=".header__drag-icon">
                <div className="filter-widget">
                    <Header />
                    <Section>
                        <Contexts />
                    </Section>
                    <Section>
                        <Dimensions />
                    </Section>
                    <Section>
                        <SearchBar />
                        <Rows />
                    </Section>
                    <footer className="filter-widget__footer"></footer>
                </div>
            </Draggable>
        );
    }
}

FilterWidget.propTypes = {
    handleMount: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleMount: () => dispatch(loadEntities())
    }
};

export default connect(
    null,
    mapDispatchToProps
)(FilterWidget);