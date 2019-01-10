import React, { Component } from 'react';

class HeaderItem extends Component {
  render = () => {
    return (
        <li className="k-menu__item k-menu__item--rel" data-kmenu-submenu-toggle="click" data-kmenu-link-redirect="1" aria-haspopup="true">
            <a href="#" className="k-menu__link k-menu__toggle">
                <span className="k-menu__link-text">Some link here</span>
            </a>
        </li>
    );
  }
}

// WHEN THE MENU ITEM IS A DROPDOWN
{/* <li className="k-menu__item  k-menu__item--submenu k-menu__item--rel" data-kmenu-submenu-toggle="click" data-kmenu-link-redirect="1" aria-haspopup="true">
    <a href="javascript:;" className="k-menu__link k-menu__toggle"><span className="k-menu__link-text">Apps</span><i className="k-menu__hor-arrow la la-angle-down"></i><i className="k-menu__ver-arrow la la-angle-right"></i></a>
    <div className="k-menu__submenu k-menu__submenu--classic k-menu__submenu--left">
        <ul className="k-menu__subnav">
            <li className="k-menu__item  k-menu__item--submenu" data-kmenu-submenu-toggle="hover" data-kmenu-link-redirect="1" aria-haspopup="true"><a href="components_datatable_v1.html" className="k-menu__link k-menu__toggle"><i className="k-menu__link-bullet k-menu__link-bullet--dot"><span></span></i><span className="k-menu__link-text">Audience</span><i className="k-menu__hor-arrow la la-angle-right"></i><i className="k-menu__ver-arrow la la-angle-right"></i></a>
                <div className="k-menu__submenu k-menu__submenu--classic k-menu__submenu--right">
                    <ul className="k-menu__subnav">
                        <li className="k-menu__item " data-kmenu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="k-menu__link "><i className="k-menu__link-icon flaticon-users"></i><span className="k-menu__link-text">Active Users</span></a></li>
                        <li className="k-menu__item " data-kmenu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="k-menu__link "><i className="k-menu__link-icon flaticon-interface-1"></i><span className="k-menu__link-text">User Explorer</span></a></li>
                        <li className="k-menu__item " data-kmenu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="k-menu__link "><i className="k-menu__link-icon flaticon-lifebuoy"></i><span className="k-menu__link-text">Users Flows</span></a></li>
                        <li className="k-menu__item " data-kmenu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="k-menu__link "><i className="k-menu__link-icon flaticon-graphic-1"></i><span className="k-menu__link-text">Market Segments</span></a></li>
                        <li className="k-menu__item " data-kmenu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="k-menu__link "><i className="k-menu__link-icon flaticon-graphic"></i><span className="k-menu__link-text">User Reports</span></a></li>
                    </ul>
                </div>
            </li>
            <li className="k-menu__item " data-kmenu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="k-menu__link "><i className="k-menu__link-bullet k-menu__link-bullet--dot"><span></span></i><span className="k-menu__link-text">Marketing</span></a></li>
            <li className="k-menu__item " data-kmenu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="k-menu__link "><i className="k-menu__link-bullet k-menu__link-bullet--dot"><span></span></i><span className="k-menu__link-text">Campaigns</span><span className="k-menu__link-badge"><span className="k-badge k-badge--success">3</span></span></a></li>
        </ul>
    </div>
</li> */}

export default HeaderItem;