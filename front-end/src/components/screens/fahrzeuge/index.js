import React, { Component } from 'react';

//Head image
import headImage from '../.././images/headImage/head-image.png'

//Aktive Fahrzeuge
import Fahrzeug1 from '../.././images/Fahrzeuge/AktiveFahrzeuge/SLF-A.jpg'
import Fahrzeug2 from '../.././images/Fahrzeuge/AktiveFahrzeuge/TLFA2000.jpg'

//Ausgeschiedene Fahrzeuge
import Fahrzeug3 from '../.././images/Fahrzeuge/AusgeschiedeneFahrzeuge/TLFA2000.jpg'
import Fahrzeug4 from '../.././images/Fahrzeuge/AusgeschiedeneFahrzeuge/Unimog.jpg'
import Fahrzeug5 from '../.././images/Fahrzeuge/AusgeschiedeneFahrzeuge/FordFK.jpg'
import Fahrzeug6 from '../.././images/Fahrzeuge/AusgeschiedeneFahrzeuge/Kutsche.jpg'

export default class Geschichte extends Component {
  render() {
    return (
      <div>
        <img className="head_image" src={headImage}/>
          <div className="container-big">
            <h1 className="align-center heading">Fahrzeuge</h1>
            <div className="row">
              <h3>Aktive Fahrzeuge</h3>
              <div className="row team-card shadow index nop">
                <div className="col-lg-3 col-md-3">
                  <img className="car-img" src={Fahrzeug1} />
                </div>
                <div className="col-lg-9 col-md-9 container">
                  <h5 className="break-all align-center">Mercedes 925 AF/32Atego</h5>
                  <h6 className="align-center primary-light">
                    SLF-A<br />
                    Leistung: 250 PS <br />
                    Gesamtgewicht: 10,5t <br />
                    Sitzplätze: 9 <br />
                    Baujahr: 2005<br />
                  </h6>
                </div>
              </div>
              <div className="row team-card shadow index nop">
                <div className="col-lg-3 col-md-3">
                  <img className="car-img" src={Fahrzeug2} />
                </div>
                <div className="col-lg-9 col-md-9 container ">
                  <h5 className="break-all align-center">Mercedes 1329 / Atego</h5>
                  <h6 className="align-center primary-light">
                    TLFA 2000<br />
                    Leistung: 290 PS <br />
                    Gesamtgewicht: 13t <br />
                    Sitzplätze: 9 <br />
                    Baujahr: 2014<br />
                  </h6>
                </div>
              </div>
              <h3>Ausgeschiedene Fahrzeuge</h3>
              <div className="row team-card shadow index nop">
                <div className="col-lg-3 col-md-3">
                  <img className="car-img" src={Fahrzeug3}/>
                </div>
                <div className="col-lg-9 col-md-9 container ">
                  <h5 className="break-all align-center">Steyr 690</h5>
                  <h6 className="align-center primary-light">
                    TLF-A 2000<br />
                    Leistung: 170 PS <br />
                    Gesamtgewicht: 11,2t <br />
                    Sitzplätze: 9 <br />
                    Baujahr: 1986<br />
                    Ausgeschieden: 2014 <br />
                  </h6>
                </div>
              </div>
              <div className="row team-card shadow index nop">
                <div className="col-lg-3 col-md-3">
                  <img className="car-img" src={Fahrzeug4}/>
                </div>
                <div className="col-lg-9 col-md-9 container ">
                  <h5 className="break-all align-center">Mercedes Unimog U125</h5>
                  <h6 className="align-center primary-light">
                    LF-A<br />
                    Leistung: 125 PS <br />
                    Gesamtgewicht: 6,8t <br />
                    Sitzplätze: 8 <br />
                    Baujahr: 1977<br />
                    Ausgeschieden: 2005 <br />
                  </h6>
                </div>
              </div>
              <div className="row team-card shadow index nop">
                <div className="col-lg-3 col-md-3">
                  <img className="car-img" src={Fahrzeug5}/>
                </div>
                <div className="col-lg-9 col-md-9 container ">
                  <h5 className="break-all align-center">Ford FK 1250</h5>
                  <h6 className="align-center primary-light">
                    MTF<br />
                    Leistung: 55 PS <br />
                    Gesamtgewicht: 2t <br />
                    Sitzplätze: 8 <br />
                    Baujahr: 1960<br />
                    Ausgeschieden: 2005 <br />
                  </h6>
                </div>
              </div>
              <div className="row team-card shadow index nop">
                <div className="col-lg-3 col-md-3">
                  <img className="car-img" src={Fahrzeug6}/>
                </div>
                <div className="col-lg-9 col-md-9 container ">
                  <h5 className="break-all align-center">Pferdebespannte Kutsche</h5>
                  <h6 className="align-center primary-light">
                    PfK<br />
                    Leistung: 1 PS <br />
                    Gesamtgewicht: ? <br />
                    Sitzplätze: 3 <br />
                    Baujahr: ?<br />
                    Ausgeschieden<br />
                  </h6>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
