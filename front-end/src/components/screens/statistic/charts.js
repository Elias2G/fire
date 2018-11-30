import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Charts extends Component {
  render() {
    const data = {
      labels: [
        'Brandeinsatz',
        'Technisch'
      ],
      datasets: [
        {
          label: 'Temperature',
          data: [22,19],
          fill: false,          // Don't fill area under the line
          borderColor: 'green'  // Line color
        }
      ]
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Einsätze 2018</h1>
        </header>
        <article className="canvas-container">
          <Doughnut data={data}/>
        </article>
      </div>
    );
  }
}

export default Charts;
