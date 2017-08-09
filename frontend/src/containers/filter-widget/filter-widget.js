import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import Contexts from "containers/contexts/contexts";
import Dimensions from "containers/dimensions/dimensions";
import Section from "components/section/section";
import Header from "components/header/header";
import SearchBar from "containers/search-bar/search-bar";
import { loadEntities } from "actions/thunk";
import { connect } from "react-redux";
import "./filter-widget.css";

class FilterWidget extends React.PureComponent {
    static propTypes = {
        handleComponentMount: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.handleComponentMount();
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
                    </Section>
                    <Section>
                        <footer className="filter-widget__footer"></footer>
                    </Section>
                </div>
            </Draggable>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleComponentMount: () => dispatch(loadEntities())
    }
};

export default connect(
    (state) => { },
    mapDispatchToProps
)(FilterWidget);