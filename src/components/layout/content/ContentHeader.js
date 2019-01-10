import React, { Component } from 'react';

class ContentHeader extends Component {
    render = () => {
        return (
            <div className="k-content__head	k-grid__item">
                <div className="k-content__head-main">
                    <h3 className="k-content__head-title">Page title</h3>
                    <div className="k-content__head-breadcrumbs">
                        <a href="" className="k-content__head-breadcrumb-link">Path</a>
                        <span className="k-content__head-breadcrumb-separator"></span>
                        <a href="" className="k-content__head-breadcrumb-link">Some other path</a>
                        {/*  <span className="k-content__head-breadcrumb-link k-content__head-breadcrumb-link--active">Active link</span>  */}
                    </div>
                </div>
                <div className="k-content__head-toolbar">
                    <div className="k-content__head-wrapper">
                        <a href="#" className="btn btn-sm btn-elevate btn-brand">
                            <span className="k-opacity-7">Some action</span>&nbsp;
                            <i className="flaticon-calendar-with-a-clock-time-tools k-padding-l-5 k-padding-r-0"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentHeader;