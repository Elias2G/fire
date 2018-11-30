import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../../../redux/actions';
import { ROOT_URL, getEinsatz } from '../../../config';

class Statistic extends Component {
  state = {
    reload: false,
  }
  componentDidMount() {
    this.props.fetch('fetch_einsaetze', `${getEinsatz}`);
  }

  render() {
    return (
      <div>
        <img className="head_image coantainer-big" />

        <div className="container-big">
          <h1>Statistik</h1>
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
)(Statistic)
