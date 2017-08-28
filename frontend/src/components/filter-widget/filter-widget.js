import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import Contexts from "containers/contexts/contexts";
import Dimensions from "containers/dimensions/dimensions";
import Section from "components/section/section";
import Header from "components/header/header";
import SearchBar from "containers/search-bar/search-bar";
import "./filter-widget.css";

export default class FilterWidget extends React.PureComponent {
    static propTypes = {
        widgetId: PropTypes.string.isRequired,
        handleFilterClose: PropTypes.func.isRequired
    }

    render() {
        return (
            <Draggable handle=".header__drag-icon">
                <div className="filter-widget">
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
                        <footer className="filter-widget__footer"></footer>
                    </Section>
                </div>
            </Draggable>
        );
    }
}

