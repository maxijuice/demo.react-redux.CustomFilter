import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import Contexts from "containers/contexts/contexts";
import Dimensions from "containers/dimensions/dimensions";
import Section from "components/section/section";
import Header from "components/header/header";
import SearchBar from "containers/search-bar/search-bar";
import "./panel-filter.css";

export default class Filter extends React.PureComponent {
    static propTypes = {
        widgetId: PropTypes.string.isRequired,
        handleFilterClose: PropTypes.func.isRequired
    }

    render() {
        return (
            <Draggable handle=".header__drag-icon">
                <div className="filter">
                    <Header handleCloseClick={this.props.handleFilterClose}/>
                    <Section>
                        <Contexts widgetId={this.props.widgetId} />
                    </Section>
                    <Section>
                        <Dimensions widgetId={this.props.widgetId} />
                    </Section>
                    <Section>
                        <SearchBar widgetId={this.props.widgetId} />
                    </Section>
                    <Section>
                        <footer className="filter__footer"></footer>
                    </Section>
                </div>
            </Draggable>
        );
    }
}

