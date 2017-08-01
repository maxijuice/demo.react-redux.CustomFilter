import React from "react";
import Contexts from "../containers/Contexts";

export default class FilterWidget extends React.PureComponent {
    render() {
        return (
            <div className="filter-widget">
                <header className="filter-widget__header"></header>
                <section className="filter-widget__widget-section aligned-section">
                    <div className="section-alignment"></div>
                    <Contexts />
                </section>
                <section className="filter-widget__widget-section entity-section"></section>
                <section className="filter-widget__widget-section search"></section>

                
                <footer className="filter-widget__footer"></footer>
            </div>
        );
    }
}