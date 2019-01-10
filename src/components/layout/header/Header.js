import React, { Component } from "react";

import HeaderMenu from "./HeaderMenu";
import HeaderTopbar from "./HeaderTopbar";

class Header extends Component {
    render = () => {
        return (
            <div className="k-header k-grid__item  k-header--fixed ">
                <HeaderMenu />
                <HeaderTopbar />
            </div>
        );
    };
}

export default Header;
