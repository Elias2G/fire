import React from 'react';

export const Card = (props) => (
  <div className="einsatz-card shadow">

    <div className="row top-part">
      <div className="column col-s-2">
        <div className="circle">
        </div>
      </div>
      <div className="column col-s-10">
        <h5 className="bold exo">{props.title}</h5>
        <h6 className="regular primary">{props.subtitle}</h6>
      </div>
    </div>

    <div className="row middle-part">
      <div className="column col-s-12 placeholder-image">
        image
      </div>
      <div className="column col-s-12">
        <p>Datum: {props.date}</p>
        <p>Uhrzeit: {props.clock}</p>
        <p>Ort: {props.ort}</p>
      </div>
    </div>

    <div className="row bottom-part">
      <div className="column col-s-12">
        <button className="btn-pos-right"> mehr </button>
      </div>
    </div>
  </div>
);
