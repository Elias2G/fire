import React, { Component } from 'react';

export default class Geschichte extends Component {
  render() {
    return (
      <div>
        <img className="head_image" />
          <div className="container-big">
            <h1 className="align-center heading">Fahrzeuge</h1>
            <div className="row">
              <h3>Aktive Fahrzeuge</h3>
              <div className="row team-card shadow index nop">
                <div className="col-lg-3 col-md-3 terminBild">
                  <img className="car-img" src="https://img.picload.org/image/dclwarpg/slf-a.jpg" />
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
                <div className="col-lg-3 col-md-3 terminBild">
                  <img className="car-img" src="https://img.picload.org/image/dclwarpo/tlfa2000bj2005.jpg" />
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
                <div className="col-lg-3 col-md-3 terminBild">
                  <img className="car-img" src="https://img.picload.org/image/dclwarpl/tlfa2000.jpg" />
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
                <div className="col-lg-3 col-md-3 terminBild">
                  <img className="car-img" src="https://img.picload.org/image/dclwarpc/unimog.jpg" />
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
                <div className="col-lg-3 col-md-3 carBild">
                  <img className="car-img" src="https://img.picload.org/image/dclwarwa/fordfk1250.jpg"/>
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
                <div className="col-lg-3 col-md-3 terminBild">
                  <img className="car-img" src="https://img.picload.org/image/dclwarwo/kutsche.jpg" />
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
