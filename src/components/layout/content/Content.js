import React, { Component } from 'react';

import ContentHeader from "./ContentHeader";
import ContentBody from './ContentBody';

class Content extends Component {
  render = () => {
    return (
        <div className="k-content	k-grid__item k-grid__item--fluid k-grid k-grid--hor">
            <ContentHeader />
            <ContentBody />
        </div>
    );
  }
}

export default Content;