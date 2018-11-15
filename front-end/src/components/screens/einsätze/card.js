import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Card extends Component {
  state = {
    open: 'e-open',
  }

  handleClick = () => {
    this.setState({
      open: this.state.open === 'e-open' ? 'e-closed' : 'e-open',
    })
  }

  render() {
    const { data } = this.props;
    return (
      <div className="col-s-12 einsatz-card-full shadow nop">

        <div className="einsatz-card-title" onClick={this.handleClick}>
          <div className="row nop">
            <div className="column col-s-12 col-lg-3 nop">
              <h6 className="light">
                {
                  data.Datum.substring(8,10) + '.' +
                  data.Datum.substring(5,7) + '.' +
                  data.Datum.substring(0,4)
                }
              </h6>
            </div>
            <div className="column col-s-12 col-lg-3 nop">
              <h6 className="light">
                {data.Ausrueckungsgrund}
              </h6>
            </div>
            <div className="column col-s-12 col-lg-3 nop">
              <h6 className="light">
                {data.Einsatzort}
              </h6>
            </div>
            <div className="column col-s-12 col-lg-3 nop">
              <div>
                icon
              </div>
            </div>
          </div>
        </div>

        <div className={"einsatz-info-container " + this.state.open}>
          <div className="row nop">
            <div className="column col-s-12 col-lg-6 nop">
              <h6>Einsatzbericht</h6>
              <p></p>
            </div>
            <div className="column col-s-12 col-lg-6 nop">
              <h6>Einsatzdaten</h6>
              <p>
                Datum: {
                  data.Datum.substring(8,10) + '.' +
                  data.Datum.substring(5,7) + '.' +
                  data.Datum.substring(0,4)
                }
              </p>
              <p>
                Beginn:
                {
                  data.Beginn === null ? 'x' : data.Beginn.substring(11,16)
                }
              </p>
              <p>Dauer: {data.Dauer} h</p>
              <h6>Eigene Einsatzkräfte</h6>
              <p>Mannschaft: { data.Anzahl }</p>
            </div>
          </div>
        </div>

    </div>

    );
  }
}
