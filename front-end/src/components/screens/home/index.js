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
        <h1 className="container-big">Letzte Einsätze</h1>
        <Einsätze />

        <h1 className="container-big">Neuigkeiten</h1>
        <News />

        <h1 className="container-big">Termine</h1>
        <Termine />

        </div>
      </div>
    );
  }
}
