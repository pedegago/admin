import React, { Component } from 'react';

import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

class HeaderUserMenu extends Component {
    constructor (props){
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render = () => {
        return (
            <Dropdown
                className="k-header__topbar-item k-header__topbar-item--user"
                isOpen={this.state.isOpen}
                toggle={this.toggleMenu}
            >
                <DropdownToggle tag="div" className="k-header__topbar-wrapper" data-offset="10px -2px">
                    <div className="k-header__topbar-user">
                        <span className="k-header__topbar-welcome k-hidden-mobile">Hi,</span>
                        <span className="k-header__topbar-username k-hidden-mobile">David</span>
                        {/* <img alt="Pic" src={userImage} /> */}
                        {/* use below badge element instead the user avatar to display username's first letter(remove k-hidden class to display it)  */}
                        <span className="k-badge k-badge--username k-badge--lg k-badge--brand">
                            <i className="flaticon2-user"></i>
                        </span>
                    </div>
                </DropdownToggle>

                <DropdownMenu className="dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-md">
                    <div className="k-user-card k-margin-b-30 k-margin-b-30-tablet-and-mobile">
                        <div className="k-user-card__wrapper">
                            <div className="k-user-card__details">
                                <div className="k-user-card__name">David Gago</div>
                                <div className="k-user-card__position">UI Developer, LAWebDevFirm.</div>
                            </div>
                        </div>
                    </div>
                    <ul className="k-nav k-margin-b-10">
                        <li className="k-nav__item">
                            <a href="custom_user_profile-v1.html" className="k-nav__link">
                                <span className="k-nav__link-icon"><i className="flaticon2-calendar-3"></i></span>
                                <span className="k-nav__link-text">My Profile</span>
                            </a>
                        </li>
                        <li className="k-nav__item">
                            <a href="custom_user_profile-v1.html" className="k-nav__link">
                                <span className="k-nav__link-icon"><i className="flaticon2-browser-2"></i></span>
                                <span className="k-nav__link-text">My Tasks</span>
                            </a>
                        </li>
                        <li className="k-nav__item k-nav__item--custom k-margin-t-15">
                            <a href="#" target="_blank" className="btn btn-outline-metal btn-hover-brand btn-upper btn-font-dark btn-sm btn-bold">Sign Out</a>
                        </li>
                    </ul>
                </DropdownMenu>
            </Dropdown>
        );
    };
}

export default HeaderUserMenu;