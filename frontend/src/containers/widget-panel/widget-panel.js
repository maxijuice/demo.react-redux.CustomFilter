import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import configureStore from "store/configure";
import { Provider } from 'react-redux';
import PanelControls from "components/panel-controls/panel-controls";
import FilterWidget from "components/filter-widget/filter-widget";
import { uploadFilterState, loadFilterState, loadEntities } from "actions/thunk";
import "./widget-panel.css";

export default class WidgetPanel extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        classNames: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.store = configureStore();
        this.store.dispatch(loadEntities());

        this.state = {
            storeState: {},
            filterEnabled: false
        };        
    }

    componentWillMount() {
        this.setState({
            storeState: this.store.getState()
        });

        this.unsubscribe = this.store.subscribe(() => {
            this.setState({
                storeState: this.store.getState()
            });
        });
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

    handleSaveState = () => {
        this.store.dispatch(uploadFilterState(this.props.id));
    }

    handleLoadState = () => {
        this.store.dispatch(loadFilterState(this.props.id));
    }

    render() {
        let filterMarkup;

        if (this.state.filterEnabled) {
            filterMarkup = (
                <Provider store={this.store}>
                    <FilterWidget handleFilterClose={this.handleFilterClose} />
                </Provider>
            );
        }

        return (
            <div className={`widget-panel ${this.props.classNames}`}>
                <PanelControls 
                        rows={this.state.storeState.getIn([ "domain", "filterResult", "rows" ]).join(", ")}
                        dimensions={this.state.storeState.getIn([ "domain", "filterResult", "dimensions" ]).join(", ")}
                        tables={this.state.storeState.getIn([ "domain", "filterResult", "tables" ]).join(", ")}
                        filterEnabled={this.state.filterEnabled}
                        widgetId={this.props.id}
                        handleFilterToggle={this.handleFilterToggle}
                        handleSaveClick={this.handleSaveState}
                        handleLoadClick={this.handleLoadState} />
                {filterMarkup}
            </div>
        );
    }
}
