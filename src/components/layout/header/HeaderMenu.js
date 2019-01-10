import React, { Component } from 'react';

import HeaderItem from "./HeaderItem";

class HeaderMenu extends Component {
  render = () => {
    return (
        <div className="k-header-menu-wrapper">
            {/* <nav className="k-header-menu k-header-menu-mobile ">
                <ul className="k-menu__nav ">
                    <HeaderItem />
                </ul>
            </nav> */}
        </div>
    );
  }
}

export default HeaderMenu;