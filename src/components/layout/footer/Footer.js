import React, { Component } from 'react';

class Footer extends Component {
  render = () => {
    return (
        <footer className="k-footer	k-grid__item k-grid k-grid--desktop k-grid--ver-desktop">
            <div className="k-footer__copyright">
                2018&nbsp;&copy;&nbsp;<a href="https://ondreserve.com" target="_blank" className="k-link">On Demand Reservations</a>
            </div>
            <div className="k-footer__menu">
                <a href="#" target="_blank" className="k-footer__menu-link k-link">Link 1</a>
                <a href="#" target="_blank" className="k-footer__menu-link k-link">Link 2</a>
            </div>
        </footer>
    );
  }
}

export default Footer;
