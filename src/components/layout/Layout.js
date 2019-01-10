import React, { Component } from 'react';

import { connect } from "react-redux";

import HeaderMobile from './header/HeaderMobile';
import Header from './header/Header';
import Aside from './aside/Aside';
import Content from './content/Content';
import Footer from './footer/Footer';

import classNames from "classnames";

class Layout extends Component {
    render = () => {
        return (
            <div className={classNames(
                "k-header--fixed",
                "k-header-mobile--fixed",
                "k-aside--enabled",
                "k-aside--fixed",
                { "k-aside--on": this.props.ui.toggleAside },
                { "k-aside--minimize": this.props.ui.minimizeAside },
                { "k-aside--minimize-hover": this.props.ui.hoverAside },
                { "k-header__topbar--mobile-on": this.props.ui.toggleHeader }
            )}>
                <HeaderMobile />
                <div className="k-grid k-grid--hor k-grid--root">
                    <div className="k-grid__item k-grid__item--fluid k-grid k-grid--ver k-page">
                        <Aside />
                        <div className="k-grid__item k-grid__item--fluid k-grid k-grid--hor k-wrapper">
                            <Header />
                            <Content />
                            <Footer />
                        </div>
                    </div>
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
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);