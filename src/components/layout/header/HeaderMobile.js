import React, { Component } from 'react';

import { connect } from "react-redux";
import { onToggleAside, onToggleHeader } from "../../../actions/UiActions";

import classNames from "classnames";
import logo from "../../../static/images/logo.png";

class HeaderMobile extends Component {
    openAside = () => {
        this.props.onToggleAside(true);
    };

    toggleHeader = () => {
        const expanded = this.props.ui.toggleHeader;
        this.props.onToggleHeader(!expanded);
    };

    render = () => {
        return (
            <header className="k-header-mobile  k-header-mobile--fixed ">
                <div className="k-header-mobile__logo">
                    <a href="/">
                        <img alt="Logo" src={logo} />
                    </a>
                </div>
                <div className="k-header-mobile__toolbar">
                    <button
                        className={classNames(
                            "k-header-mobile__toolbar-toggler",
                            `k-header-mobile__toolbar-toggler--${
                                this.props.ui.toggleAside
                                    ? "right"
                                    : "left"
                            }`
                        )}
                        onClick={this.openAside}
                    >
                        <span />
                    </button>
                    <button
                        className="k-header-mobile__toolbar-topbar-toggler"
                        onClick={this.toggleHeader}
                    >
                        <i className="flaticon-more" />
                    </button>
                </div>
            </header>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        ui: state.ui
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleAside: (expanded) => dispatch(onToggleAside(expanded)),
        onToggleHeader: (expanded) => dispatch(onToggleHeader(expanded))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderMobile);