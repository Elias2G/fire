import React from 'react';

export const Card = (props) => (
  <div className="news-card shadow">
    <div className="row">
      <div className="column col-s-12 nop placeholder_img">
        <img className="news-image" />
        <div className="text-pos">
          <h3 className="primary-light card-image-title">Lorem Ipsum dolor</h3>
          <h5 className="primary-light card-image-title">Title</h5>
        </div>
      </div>
      <div className="column col-s-7">
        <p>Datum: 29. Oktober 2018</p>
      </div>
      <div className="column col-s-5">
        <button className="btn-pos-right"> mehr </button>
      </div>
    </div>
  </div>
);
