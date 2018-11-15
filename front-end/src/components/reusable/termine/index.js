import React, { Component } from 'react';

import { Card } from './card';

export default class Termine extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="column col-s-12 col-md-6">
            <Card />
          </div>
          <div className="column col-s-12 col-md-6">
            <Card />
          </div>
          <div className="column col-s-12 col-md-6">
            <Card />
          </div>
          <div className="column col-s-12 col-md-6">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
