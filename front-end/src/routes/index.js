import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { url, urlName } from './url';

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  render() {
    return (
      <>
      <div className="navigation shadow">
        <div className="row">
          <div className="column col-s-8">
            <h5>Actual site</h5>
          </div>
          <div className="column col-s-4">
            <div className="icon" onClick={this.handleClick}>
              <p className="align-right">icon</p>
            </div>
          </div>
        </div>
      </div>

      <div className={"mobile-nav shadow " + this.state.open}>
        {url.map((key, i) => {
          return (
            <NavLink
              className="align-center nav-link"
              exact to={key}
              onClick={this.handleClick}
              activeClassName="activeLink"
            >
              <div className="link-container">
                <p>{urlName[i]}</p>
              </div>
            </NavLink>
          );
        })}

      </div>
      </>
    );
  }
}
