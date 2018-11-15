import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../../../redux/actions';
import { ROOT_URL, getEinsatzPersonen } from '../../../config';

import Card from './card';

class EinsatzContainer extends Component {
  state = {
    filter: 2017,
  }

  filterHelper = (data) => {
    const arrayYear = [];

    data.map((data) => (
      this.filter(this.state.filter, data, arrayYear)
    ))
    return { arrayYear };
  }

  filter = (date, data, array) => {
    var objYear = data.Datum.substring(0,4);

    if( objYear == date ) {
      array.push(data);
    }
  }

  renderHelper = (array) => {
    const month = [ '13', '12', '11', '10', '09', '08', '07', '06', '05', '04', '03', '02', '01' ];
    var pos = 0;
    const arrayMonth = [];
    var sammlung = {};
    return (
      array.reverse().map((data) => {
        var objMonth = data.Datum.substring(5,7);

        if( month[pos] === objMonth ) {
          return (
            <Card data={data} />
          )
        } else {
          if( month[++pos] === objMonth ) {
            console.log(pos);
            return (
              <>
                <h4 className="col-s-12 red-title-bg shadow">{objMonth}</h4>
                <Card data={data} />
              </>
            )
          } else {
            ++pos
            return (
              <>
                <h4 className="col-s-12 red-title-bg shadow">{objMonth}</h4>
                <Card data={data} />
              </>
            )
          }
        }
      })
    )

  }

  render() {
    const { einsätze } = this.props.data;
    var { arrayYear } = this.filterHelper(einsätze);

    return (
      <div className="row">
        {this.renderHelper(arrayYear)}
      </div>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    data
  }
}

export default connect(
  mapStateToProps,
  { fetch }
)(EinsatzContainer)
