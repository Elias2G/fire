import React, { Component } from 'react';
import _ from 'lodash';

export default class MannschaftCard extends Component {
  state = {
    numbers: ''
  }

  componentDidMount() {
    this.setState({
      numbers: this.props.length
    })
  }

  renderHelper = (data, numbers) => {
    console.log(data);
    var num = _.uniq(numbers);
    var array = []
    for ( var key in data) {
      array.push(data[key]);
    }
    console.log(data.Bezeichnung);
    return (
      array.map((data, i) => (

          <div className="column col-s-12 col-ms-6 col-lg-4 team-card shadow index">
            {data.id}{console.log(data.Bezeichnung, i)}
            <div className="rounded-container shadow-big">
              <img className="team-img " />
            </div>
            <div className="container">
              <h4 className="break-all align-center">{data.Name}</h4>
              <h6 className="align-center primary-light">
                {data.Dienstgrad}
              </h6>
            </div>
            <div className="container">
              <p className="align-center">
                {data.Bezeichnung.map(data => (data + ', '))}
              </p>
            </div>

          </div>
        )
      )
    );
  }

  render() {
    const { data, length } = this.props;
    return (
      <div className="container-big">
        <div className="row shadow-land">
          {this.renderHelper(data, length)}
        </div>
      </div>
    );
  }
}
