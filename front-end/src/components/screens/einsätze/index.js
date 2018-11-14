import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch, determine } from '../../../redux/actions';

import { ROOT_URL, getEinsatz } from '../../../config';


class Einsätze extends Component {
  componentDidMount() {
    this.props.fetch('fetch_einsaetze', `${getEinsatz}`);
  }

  render() {
    console.log(this.props.data.einsätze)
    return (
      <div>
        <img className="head_image coantainer-big" />

        <div className="container-big">
          <h1>Einsätze</h1>
        </div>

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
)(Einsätze)
