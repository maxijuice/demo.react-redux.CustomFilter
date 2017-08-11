import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import configureStore from "store/configure";
import Button from "components/button/button";
import { Provider } from 'react-redux';
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
            store: {},
            isEnabled: false
        };        
    }

    componentWillMount() {
        this.setState({
            store: this.store.getState()
        });

        this.unsubscribe = this.store.subscribe(() => {
            this.setState({
                store: this.store.getState()
            });
        });
    }

    handleFilterToggle = () => {
        this.setState((prevState, props) => ({
            isEnabled: !prevState.isEnabled
        }));
    }

    handleFilterClose = () => {
        this.setState({
            isEnabled: false
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

        if (this.state.isEnabled) {
            filterMarkup = (
                <Provider store={this.store}>
                    <FilterWidget handleFilterClose={this.handleFilterClose} />
                </Provider>
            );
        }

        return (
            <div className={`widget-panel ${this.props.classNames}`}>
                <div className="widget-panel__header">
                    {`Widget #${this.props.id}`}
                    <Button classNames="widget-panel__toggle-button"
                        enabled={this.state.isEnabled}
                        label="Toggle filter"
                        handleClick={this.handleFilterToggle}
                    />
                </div>
                <div className="widget-panel__filter-state">
                    Current state
                    <div className="widget-panel__entity-state">
                        Tables: {this.state.store.getIn([ "domain", "filterResult", "tables" ]).join(", ")}
                    </div>
                    <div className="widget-panel__entity-state">
                        Dimensions: {this.state.store.getIn([ "domain", "filterResult", "dimensions" ]).join(", ")}
                    </div>
                    <div className="widget-panel__entity-state">
                        Rows: {this.state.store.getIn([ "domain", "filterResult", "rows" ]).join(", ")}
                    </div>
                    <input type="text"
                         className="widget-panel__output"
                         value={this.state.store.getIn(["message", "text"])}
                    />
                </div>
                <div>
                    <div className="widget-panel__button"
                        onClick={this.handleSaveState}>
                        Save
                    </div>
                    <div className="widget-panel__button"
                        onClick={this.handleLoadState}>
                        Load previous
                    </div>
                    
                </div>
                {filterMarkup}
            </div>
        );
    }
}
