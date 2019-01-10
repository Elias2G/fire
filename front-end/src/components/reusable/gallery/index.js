import React, { Component } from 'react';


export default class Gallery extends Component {
  state = {
    class: 'gallery',
  }

  componentDidMount() {

  }


  render() {
    var { open, data } = this.props;
      return (
        <div className={this.state.class + '-' + this.props.open}>
          <div className="gallery_close" onClick={this.props.handleClick}>
            {open !== true ? '+' : '-'}
          </div>
          <div>
        
          </div>
        </div>
      )
  }
}
