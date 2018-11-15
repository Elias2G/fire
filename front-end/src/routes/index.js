import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { url, urlName, dropDown } from './url';

export class Navigation extends Component {
  state = {
    width: window.outerWidth,
  }
  componentDidMount() {
    this.size();
    window.addEventListener("resize", this.size);
  }
  constructor(props) {
    super(props);
    this.state = {open: false};
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
    if(this.state.width < 1024) {
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
    } else {
      return (
        <>
        <div className="navigation shadow">
          <div className="container-big row nop">
            <div className="column col-s-2">
              <h5>Actual site</h5>
            </div>

            <div className="column col-s-10">
              <div classNAme="container-big nop">

                {url.map((key, i) => {
                  if(dropDown[i] === 1) {
                    return (
                      <>
                        <div className="dropCon desktop-alignement">
                          <NavLink
                            className="align-center nav-link notActive"
                            exact to={key}
                            onClick={this.handleClick}
                            activeClassName="activeLink"
                          >
                            <p>{urlName[i]}</p>
                          </NavLink>
                          <div className="nav-link-dropdownContainer shadow">
                          <NavLink
                            className="align-center nav-link notActive"
                            exact to={key}
                            onClick={this.handleClick}
                            activeClassName="activeLink"
                          >
                            <p className="pad">{urlName[i]}</p>
                          </NavLink>
                        </div>
                      </div>
                      </>
                    )
                  } else {
                    return (
                      <div>
                        <NavLink
                          className="align-center nav-link desktop-alignement notActive"
                          exact to={key}
                          onClick={this.handleClick}
                          activeClassName="activeLink"
                        >
                          <p>{urlName[i]}</p>
                        </NavLink>
                      </div>
                    );
                  }

                })}

              </div>
            </div>

          </div>
        </div>
        </>
      )
    }

  }
}
