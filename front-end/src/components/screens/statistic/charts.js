import React, { Component } from 'react';
import {Doughnut, Chart} from 'react-chartjs-2';


var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);

    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    var fontSize = (height / 120).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var sum = 0;
    for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
      sum += chart.config.data.datasets[0].data[i];
    }

    var text = sum,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.8;

    ctx.fillText(text, textX, textY);
  }
});

const data2 = {
	labels: [
		'Brand Einsätze',
		'Technische Einsätze',
	],
	datasets: [{
		data: [100, 78],
		backgroundColor: [
		'red',
		'black'
		],
		hoverBackgroundColor: [
		'red',
		'black'
		]
	}]
};

class Charts extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="column col-s-12 col-ms-6 col-lg-4 col-ml-4 team-card shadow index">
            <h2 className="align-center">Einsätze 2018</h2>
            <Doughnut width={200} height={100} data={data2}/>
          </div>
          <div className="column col-s-12 col-ms-6 col-lg-4 col-ml-4 team-card shadow index">
            <h2 className="align-center">Einsätze 2017</h2>
            <Doughnut width={200} height={100} data={data2}/>
          </div>
          <div className="column col-s-12 col-ms-6 col-lg-4 col-ml-4 team-card shadow index">
            <h2 className="align-center">Einsätze 2016</h2>
            <Doughnut width={200} height={100} data={data2}/>
          </div>
          <div className="column col-s-12 col-ms-6 col-lg-4 col-ml-4 team-card shadow index">
            <h2 className="align-center">Einsätze 2015</h2>
            <Doughnut width={200} height={100} data={data2}/>
          </div>
          <div className="column col-s-12 col-ms-6 col-lg-4 col-ml-4 team-card shadow index">
            <h2 className="align-center">Einsätze 2014</h2>
            <Doughnut width={200} height={100} data={data2}/>
          </div>
          <div className="column col-s-12 col-ms-6 col-lg-4 col-ml-4 team-card shadow index">
            <h2 className="align-center">Einsätze 2013</h2>
            <Doughnut width={200} height={100} data={data2}/>
          </div>
        </div>
      </div>
    );
  }
};

export default Charts;
