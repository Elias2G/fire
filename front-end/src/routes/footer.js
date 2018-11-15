import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Footer extends Component{
  render(){
    return(
      <div className="behindFooter">
        <div className="container-big row">
          <div className="column col-lg-4 col-md-6">
            <p className="footerHeading">Kontakt</p>
            <p>Kommandant:</p>
            <p>OBI Thomas KÖFER</p>
            <p>Sandstrasse 1</p>
            <p>9321 Kappel am Krappfeld</p>
            <p>Handy: 0664 3219337</p>
            <p>E-Mail: <a href="mailto:thomas.koefer@aon.at"><span className="links">Thomas.koefer@aon.at</span></a></p>
          </div>
          <div className="column col-lg-4 col-md-6">
            <p className="footerHeading">Links</p>
              <p><span className="links"><NavLink to="/">Home</NavLink></span></p>
              <p><span className="links"><NavLink to="/mannschaft">Mannschaft</NavLink></span></p>
              <p><span className="links"><NavLink to="/einsätze">Einsätze</NavLink></span></p>
              <p><span className="links"><NavLink to="/statistic">Statistik</NavLink></span></p>
              <p><span className="links"><NavLink to="/einsatzgebiet">Einsatzgebiet</NavLink></span></p>
              <p><span className="links"><NavLink to="/termine">Termine</NavLink></span></p>
          </div>
          <div className="column col-lg-4">
            <p className="footerHeading">Wettervorhersage</p>
            <div className="wetter"></div>
          </div>
        </div>
        <div className="row">
          <div className="column col-lg-12 container-big">
            <p>© 2018 FF Kappel am Krapfeld • Design by <a href="https://www.designintime.at"><span className="links">www.designintime.at</span></a></p>
          </div>
        </div>
      </div>
    );
  }
}
