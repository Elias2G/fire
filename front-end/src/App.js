import React, { Component } from 'react';

import { Navigation } from './routes';
import { Main } from './routes/routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
