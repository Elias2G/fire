import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ROOT_URL, getEinsatz } from '../../../config';

import { fetch } from '../../../redux/actions';

import { Card } from './card';

class Einsätze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        date: '9. Oktober 2018',
      }

    }
  }

  componentDidMount() {
    // this.props.fetch('fetch_einsaetze', `${ROOT_URL}${getEinsatz}`)
  }

  renderHelper = (data) => {
    return(
      data.map((data, i) => {
        if(i < 3) {
          return (
            <div className="column col-s-12 col-md-6 col-lg-4">
              <Card
                title={data.Ausrueckungsgrund}
                subtitle={data.Einsatzort}
                date={data.Datum}
                clock={data.Beginn}
                ort={data.Einsatzort}
              />
            </div>
          )
        } else {
          return
        }

      })
    )
  }

  render() {

    return (
      <div className="einsatz-container">
        <div className="row">
          {this.renderHelper(this.props.data)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({einsatz}) => {
  return {
    einsatz
  }
}

export default connect(
  mapStateToProps,
  { fetch }
)(Einsätze)
