import React, { Component } from 'react';

import { connect } from "react-redux";
import { onHoverAside, onMinimizeAside, onToggleAside } from "../../../actions/UiActions";

import AsideBrand from './AsideBrand';
import AsideMenu from './AsideMenu';
// import AsideToolbar from "./AsideToolbar";

import classNames from "classnames";

class Aside extends Component {
    hoverAside = () => {
        if (this.props.ui.minimizeAside){
            this.props.onMinimizeAside(false);
            this.props.onHoverAside(true);
        }
    };

    minimizeAside = () => {
        if (this.props.ui.hoverAside){
            this.props.onHoverAside(false);
            this.props.onMinimizeAside(true);
        }
    };

    closeAside = () => {
        this.props.onToggleAside(false);
    };

    render = () => {
        return (
            <aside>
                <button className="k-aside-close" onClick={this.closeAside}>
                    <i className="la la-close" />
                </button>
                <div className={classNames(
                        "k-aside k-aside--fixed",
                        "k-grid__item k-grid",
                        "k-grid--desktop",
                        "k-grid--hor-desktop",
                        { "k-aside--on": this.props.ui.toggleAside }
                    )}
                    onMouseEnter={this.hoverAside}
                    onMouseLeave={this.minimizeAside}
                >
                    <AsideBrand />
                    <AsideMenu />
                    {/* <AsideToolbar /> */}
                </div>
                {this.props.ui.toggleAside &&
                    <div className="k-aside-overlay" onClick={this.closeAside} />
                }
            </aside>
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
        onMinimizeAside: (minimized) => dispatch(onMinimizeAside(minimized)),
        onHoverAside: (hovered) => dispatch(onHoverAside(hovered)),
        onToggleAside: (expanded) => dispatch(onToggleAside(expanded))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Aside);
