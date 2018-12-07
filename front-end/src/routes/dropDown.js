import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DropwDown extends Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    })
    if(this.state.open === true) {
      this.props.function()
    }
  }


  renderHelper = (goTo, data) => {
    for(var i = 1; i <= this.props.data.length; i++) {
      return (
        <div className={"dropDownContainer " + this.state.open}>
          <div className={"dropContent"}>
            <NavLink
              className=""
              exact to={this.props.goTo[i]}
              activeClassName="activeLink"
            >
              <p className="dropItem"> - {this.props.data[i]}</p>
            </NavLink>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} className="dropDown">
        <NavLink
          className={'this-' + this.state.open}
          exact to={this.props.goTo[0]}
          activeClassName="activeLink"
          onClick={() => this.props.function()}
        >
          <p>{this.props.data[0]}</p>
        </NavLink>
        {this.renderHelper()}
      </div>
    );
  }
}
