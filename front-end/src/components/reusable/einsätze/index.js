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


  render() {

    return (
      <div className="einsatz-container">
        <div className="row">
          <div className="column col-s-12">
            <Card
              title="Title"
              subtitle="subtitle"
              data={this.state.data}
            />
          </div>
          <div className="column col-s-12">
            <Card
              title="Title"
              subtitle="subtitle"
              data={this.state.data}
            />
          </div>
          <div className="column col-s-12">
            <Card
              title="Title"
              subtitle="subtitle"
              data={this.state.data}
            />
          </div>
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
