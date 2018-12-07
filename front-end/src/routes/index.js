import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { url, urlName } from './url';

import DropDown from './dropDown.js';

export class Navigation extends Component {
  state = {
    width: window.outerWidth,
    open: false,
  }
  componentDidMount() {
    this.size();
    window.addEventListener("resize", this.size);
  }

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  size = () => {
    var w = window.innerWidth;
    setTimeout(() => {
      this.setState({
        width: w,
      })
    },500);
  }

  render() {
    return(
      <div className="nav">
        {this.renderHelper()}
      </div>
    )
  }

  renderHelper = () => {
    if(this.state.width < 1024) {
      return(
        <>
        <div className="mobile row">
          <div className="column col-s-10"><h2>LOGO</h2></div>
          <div
            className="column col-s-2 flex-algin-center justify-center nop"
            onClick={this.handleClick}
          >
            <div className="nav-icon"></div>
          </div>
        </div>
        <div className={"nav-menü " + this.state.open}>
          <div className="nav-item">
            <NavLink exact to='/' onClick={this.handleClick} activeClassName="activeLink">
              <p>Home</p>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink exact to='/mannschaft' onClick={this.handleClick} activeClassName="activeLink">
              <p>Mannschaft</p>
            </NavLink>
          </div>
          <div className="nav-item">
            <DropDown
              data={["Einsätze", "Statistik"]}
              goTo={["/einsätze", "/statistic"]}
              function={this.handleClick}
            />
          </div>
          <div className="nav-item">
            <NavLink exact to='/termine' onClick={this.handleClick} activeClassName="activeLink">
              <p>Termine</p>
            </NavLink>
          </div>
        </div>
        </>

      )
    } else {
      return(
        <div>

        </div>
      )
    }
  }
}
