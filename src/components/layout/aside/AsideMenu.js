import React, { Component } from 'react';

import AsideSection from './AsideSection';
import AsideItem from './AsideItem';

import PerfectScrollbar from 'perfect-scrollbar';

class AsideMenu extends Component {
    componentDidMount = () => {
        this.ps = new PerfectScrollbar('.ps');
    };

    componentWillUnmount = () => {
        this.ps.destroy();
        this.ps = null;
    };

    render = () => {
        return (
            <div
                className="k-aside-menu-wrapper k-grid__item k-grid__item--fluid"
                // style={{marginTop: "75px"}}
            >
                <nav
                    className="k-aside-menu k-scroll ps"
                    style={{height: "calc(100vh - 105px)", overflow: "hidden"}}
                    data-kmenu-vertical="1" data-kmenu-scroll="1"
                >
                    <ul className="k-menu__nav ps">
                        <AsideItem />
                        <AsideSection />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                        <AsideItem />
                    </ul>
                </nav>
            </div>
        );
    };
}

export default AsideMenu;
