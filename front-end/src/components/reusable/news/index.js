import React, { Component } from 'react';

import { Card } from './card';

export default class News extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="column col-s-12 col-md-12 col-lg-6">
            <Card classed="big-news" />
          </div>
          <div className="column col-s-12 col-md-12 col-lg-6 nop">
            <div className="row">
              <div className="column col-s-12 col-md-6 col-lg-12">
                <Card classed="small-news" />
              </div>
              <div className="column col-s-12 col-md-6 col-lg-12">
                <Card classed="small-news" />
              </div>
              <div className="column col-s-12 col-md-6 col-lg-12">
                <Card classed="small-news" />
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}
