import React, { Component } from 'react';

import Einsätze from '../../reusable/einsätze';
import News from '../../reusable/news';
import Termine from '../../reusable/termine';

export default class Home extends Component {
  render() {
    return (
      <div>
        <img className="head_image coantainer-big" />

        <div className="container-big">
          <h1>Letzte Einsätze</h1>
        </div>
        <Einsätze />

        <div className="container-big">
          <h1>Neuigkeiten</h1>
        </div>
        <News />

        <div className="container-big">
          <h1>Termine</h1>
        </div>
        <Termine />
      </div>
    );
  }
}
