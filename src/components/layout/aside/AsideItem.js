import React, { Component } from 'react';

class AsideItem extends Component {
    render = () => {
        return (
            <li className="k-menu__item" aria-haspopup="true">
                <a href="javascript:;" className="k-menu__link k-menu__toggle">
                    <i className="k-menu__link-icon flaticon2-calendar" />
                    <span className="k-menu__link-text">Menu item example</span>
                </a>
            </li>
        );
    }
}

{/* 
    THIS CODE IS WHEN THE COMPONENT IS A LIST
<li className="k-menu__item  k-menu__item--submenu" aria-haspopup="true" data-kmenu-submenu-toggle="hover"><a href="javascript:;" className="k-menu__link k-menu__toggle"><i className="k-menu__link-icon flaticon2-attention-exclamation-triangular-signal" /><span className="k-menu__link-text">Error Pages</span><i className="k-menu__ver-arrow la la-angle-right" /></a>
    <div className="k-menu__submenu "><span className="k-menu__arrow"></span>
        <ul className="k-menu__subnav">
            <li className="k-menu__item " aria-haspopup="true"><a href="custom_error_404-v1.html" className="k-menu__link "><i className="k-menu__link-bullet k-menu__link-bullet--dot"><span></span></i><span className="k-menu__link-text">404 - v1</span></a></li>
            <li className="k-menu__item " aria-haspopup="true"><a href="custom_error_404-v2.html" className="k-menu__link "><i className="k-menu__link-bullet k-menu__link-bullet--dot"><span></span></i><span className="k-menu__link-text">404 - v2</span></a></li>
            <li className="k-menu__item " aria-haspopup="true"><a href="custom_error_404-v3.html" className="k-menu__link "><i className="k-menu__link-bullet k-menu__link-bullet--dot"><span></span></i><span className="k-menu__link-text">404 - v3</span></a></li>
            <li className="k-menu__item " aria-haspopup="true"><a href="custom_error_404-v4.html" className="k-menu__link "><i className="k-menu__link-bullet k-menu__link-bullet--dot"><span></span></i><span className="k-menu__link-text">404 - v4</span></a></li>
        </ul>
    </div>
</li> */}

export default AsideItem;
