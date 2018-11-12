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
    return (
      array.map(data => (
          <p>
            {data.id}
          </p>
        )
      )
    );
  }

  render() {
    const { data, length } = this.props;
    return (
      <>
        {this.renderHelper(data, length)}
      </>
    );
  }
}
