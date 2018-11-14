import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { determine } from '../../../redux/actions/actions';
import MannschaftCard from './card';

export default class MannschaftContainer extends Component {


  loop = (data) => {
    const obj = {};
    var numbers = [];

    for (var i = 0; i < data.length; i++) {
      numbers.push(data[i].id);
    }
    numbers = _.uniq(numbers);

    var pos = 0;
    var team = [];

      data.map((data, i) => {
        if(data.id !== numbers[pos]) {
          pos = pos + 1;
          team.push(data.Bezeichnung)

          obj[pos] = {id: data.id, Name: `${data.Vorname} ${data.Zuname}`, Dienstgrad: data.Kürzel, Bezeichnung: team}
          team = []

        } else {
          team.push(data.Bezeichnung)
          obj[pos] = {id: data.id, Name: `${data.Vorname} ${data.Zuname}`, Dienstgrad: data.Kürzel, Bezeichnung: team};
        }
      })

    return { obj, numbers };
  }

  render() {
    const data = this.props.data;
    var { obj, numbers } = this.loop(data);

    return (
      <div>
        <MannschaftCard data={obj} length={numbers}/>
      </div>
    );
  }
}
