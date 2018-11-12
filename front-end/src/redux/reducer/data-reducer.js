import { FETCH_ALL } from '../actions/type';

const initState = [{
  "Paß-Nr": "",
  "Aktiv seit": "",
  "Titel": null,
  "Zuname": "",
  "Vorname": "",
  "Zweiter Vorname": null,
  "PLZ": "",
  "Anschrift": "",
  "Vers-Nr": null,
  "Geb_Dat": "",
  "Versicherung": null,
  "Blutgruppe": null,
  "berufsgruppe": null,
  "Präsenzdiensausb": null,
  "Zivildienstausb": null,
  "Führerschein": null,
  "FW-Zeitschrift": {
    "type": "Buffer",
    "data": [
      0
    ]
  },
  "Schlüssel": null,
  "Status": "",
  "Paß-Aktualisiert": null,
  "Gruppe": null,
  "drucken": {
    "type": "Buffer",
    "data": [
      0
    ]
  }
}]

export default function(state = initState, action) {
  console.log(action);
  switch(action.type) {
    case FETCH_ALL:
    console.log(action.data)
      return action.data 
    default:
      return state;
  }
}
