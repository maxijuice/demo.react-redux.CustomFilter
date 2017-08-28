import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";
import Toggle from "components/toggle/toggle";
import "./panel-controls.css";

export default class PanelControls extends PureComponent {
    static propTypes = {
        widgetId: PropTypes.string.isRequired,
        filterEnabled: PropTypes.bool.isRequired,

        tables: PropTypes.instanceOf(Immutable.List).isRequired,
        dimensions: PropTypes.instanceOf(Immutable.List).isRequired,
        rows: PropTypes.instanceOf(Immutable.List).isRequired,

        handleFilterToggle: PropTypes.func.isRequired,
        handleSaveClick: PropTypes.func.isRequired,
        handleLoadClick: PropTypes.func.isRequired,
        classNames: PropTypes.string
    }

    message = entity => {
        return this.props[ entity ].length === 0 ?
            `No ${entity} selected`
            : this.props[entity].join();
    }

    render() {
        return (
            <div className="panel-controls">
                <div className="panel-controls__header">
                    {`Widget #${this.props.widgetId}`}

                    <Toggle value={this.props.filterEnabled}
                        handleToggle={this.props.handleFilterToggle}
                        classNames="panel-controls__toggle" />
                </div>

                <div className="panel-controls__separator" />
                <div className="panel-controls__section-header">State</div>

                <dl className="panel-controls__list">
                    <dt className="panel-controls__list-header">Tables</dt>
                    <dd className="panel-controls__list-value">{this.message("tables")}</dd>

                    <dt className="panel-controls__list-header">Dimensions </dt>
                    <dd className="panel-controls__list-value">{this.message("dimensions")}</dd>

                    <dt className="panel-controls__list-header">Rows</dt>
                    <dd className="panel-controls__list-value">{this.message("rows")}</dd>
                </dl>

                <div className="panel-controls__separator" />
                <div className="panel-controls__section-header">Output</div>

                <input className="panel-controls__output" type="text" value="" />

                <div className="panel-controls__separator" />
                <div className="panel-controls__section-header">Controls</div>

                <div className="panel-controls__controls">
                    <div className="panel-controls__button"
                        onClick={this.props.handleSaveClick}>
                        Save
                    </div>
                    <div className="panel-controls__button"
                        onClick={this.props.handleLoadClick}>
                        Load previous
                    </div>
                </div>
            </div>
        );
    }
}