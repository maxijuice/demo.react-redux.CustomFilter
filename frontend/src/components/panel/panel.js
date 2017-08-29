import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import PanelControls from "containers/widget-controls/widget-controls";
import PanelFilter from "components/panel-filter/panel-filter";
import "./panel.css";

export default class WidgetPanel extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        handleDataFetching: PropTypes.func.isRequired,
        classNames: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            filterEnabled: false
        };
    }

    componentWillMount() {
        this.props.handleDataFetching();
    }

    handleFilterToggle = () => {
        this.setState((prevState, props) => ({
            filterEnabled: !prevState.filterEnabled
        }));
    }

    handleFilterClose = () => {
        this.setState({
            filterEnabled: false
        });
    }

    render() {
        let filterMarkup;

        if (this.state.filterEnabled) {
            filterMarkup = <PanelFilter widgetId={this.props.id} handleFilterClose={this.handleFilterClose} />;
        }

        return (
            <div className={`widget-panel ${this.props.classNames}`}>
                <PanelControls
                    filterEnabled={this.state.filterEnabled}
                    widgetId={this.props.id}
                    handleFilterToggle={this.handleFilterToggle} />
                {filterMarkup}
            </div>
        );
    }
}
