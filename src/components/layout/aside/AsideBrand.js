import React, { Component } from 'react';

import { connect } from "react-redux";
import { onHoverAside, onMinimizeAside } from "../../../actions/UiActions";

import classNames from "classnames";
import logo from "../../../static/images/logo.png";

class AsideBrand extends Component {
    toggleMinimize = () => {
        if (this.props.ui.hoverAside){
            this.props.onHoverAside(false);
        } else {
            this.props.onMinimizeAside(true);
        }
    };

    render = () => {
        return (
            <div
                className="k-aside__brand	k-grid__item "
                // style={{marginBottom: "-75px"}}
            >
                <div className="k-aside__brand-logo">
                    <a href="/">
                        <img alt="Logo" src={logo} />
                    </a>
                </div>
                <div className="k-aside__brand-tools">
                    <button
                        className={classNames(
                            "k-aside__brand-aside-toggler",
                            `k-aside__brand-aside-toggler--${
                                this.props.ui.minimizeAside || this.props.ui.hoverAside
                                    ? "right"
                                    : "left"
                            }`
                        )}
                        onClick={this.toggleMinimize}
                    >
                        <span />
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ui: state.ui
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHoverAside: (hovered) => dispatch(onHoverAside(hovered)),
        onMinimizeAside: (minimized) => dispatch(onMinimizeAside(minimized))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AsideBrand);