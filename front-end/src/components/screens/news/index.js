import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {
  render() {
    return (
      <div>test</div>
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
  {  }
)(News)
