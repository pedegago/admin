import React, { Component } from 'react';

import HeaderUserMenu from "./HeaderUserMenu";

class HeaderTopbar extends Component {
  render = () => {
    return (
        <div className="k-header__topbar">
            {/* begin: Search  */}
            <div className="k-header__topbar-item k-header__topbar-item--search dropdown">
                <div className="k-header__topbar-wrapper">
                    <span className="k-header__topbar-icon"><i className="flaticon2-search-1"></i></span>
                </div>
            </div>
            {/* end: Search  */}

            {/* begin: Quick actions  */}
            <div className="k-header__topbar-item dropdown">
                <div className="k-header__topbar-wrapper">
                    <span className="k-header__topbar-icon"><i className="flaticon2-gear"></i></span>
                </div>
            </div>
            {/* end: Quick actions  */}

            <HeaderUserMenu />
        </div>
    );
  }
}

export default HeaderTopbar;