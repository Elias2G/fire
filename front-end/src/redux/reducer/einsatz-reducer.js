import { FETCH_EINSAETZE } from '../actions/type';

const initState = [{
        "Nr": 7672,
        "Einsatz-Nr": 1290,
        "Paß-Nr": "38489",
        "Fahrzeug": null,
        "Maschine": null,
        "Anwesend": {
            "type": "Buffer",
            "data": [
                0
            ]
        },
        "Bereitschaft": {
            "type": "Buffer",
            "data": [
                1
            ]
        },
        "Entsch": {
            "type": "Buffer",
            "data": [
                0
            ]
        },
        "Grp": 3
    },
    {
          "Lfd_Nr": 1290,
          "Einsatzleiter": "38494",
          "Datum": "2008-12-29T23:00:00.000Z",
          "Brandeinsatz": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Techn Einsatz": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Techn Hilfeleistung": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Monatsübung": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Übung-sonstige": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Dienstbesprechung": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Kurse": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Verwaltung": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Festbesuch": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Sonstiges-kästchen": {
              "type": "Buffer",
              "data": [
                  1
              ]
          },
          "Jugendarbeit": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "1 = TLFA 2000": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "KM 1": null,
          "2 = LF": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "KM2": null,
          "Beginn": "1899-12-30T15:00:00.000Z",
          "Ende": "1899-12-30T21:00:00.000Z",
          "Dauer": 6,
          "Ausrückungsgrund": "Kemma zam",
          "Einsatzort": "Rüsthaus",
          "Name des Geschädigten": null,
          "6 = Pumpe TLF": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Zeit6": null,
          "7 = TS 8": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Zeit7": null,
          "8 = Drucklüfter": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Zeit8": null,
          "9 = Schlammpumpe": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Zeit9": null,
          "10 = Tauchp_kl": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Zeit10": null,
          "11 = Tauchp_gr": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Zeit11": null,
          "12 = Notstrom_kl": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Zeit12": null,
          "13 = Notstom_gr": {
              "type": "Buffer",
              "data": [
                  0
              ]
          },
          "Zeit13": null,
          "14=": null,
          "Reserve": null,
          "Zeit14": null,
          "Atemschutzzeit": null
      }
    ]

export default function(state = initState, action) {
  console.log(action);
  switch(action.type) {
    case FETCH_EINSAETZE:
    console.log(action.data)
      return action.data
    default:
      return state;
  }
}
