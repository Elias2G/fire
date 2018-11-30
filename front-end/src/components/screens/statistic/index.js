import React, { Component } from 'react';
import { connect } from 'react-redux';

import { determine, fetch } from '../../../redux/actions';
import { ROOT_URL, getEinsatz } from '../../../config';

import Charts from './charts';

class Statistic extends Component {
  state = {
    reload: false,
  }
  componentDidMount() {
    this.props.fetch('fetch_einsaetze', `${getEinsatz}`);
    this.props.determine('create_stat', this.props.data.einsätze)
  }

  render() {
    return (
      <div>
        <img className="head_image coantainer-big" />

        <div className="container-big">
          <Charts />
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
  { determine, fetch }
)(Statistic)
