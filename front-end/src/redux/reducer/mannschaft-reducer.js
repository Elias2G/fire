import { FETCH_MANNSCHAFT, SAVE_MANNSCHAFT } from '../actions/type';
import _ from 'lodash';

const initState = [
  {
    "Nr":"04147",
    "Vorname":"Gerhard",
    "funktion":"KANTINE",
    "Kürzel":"FM",
    "Bezeichnung":"Kantineur"
  },
  {
    "Paß-Nr":"04147",
    "Vorname":"Gerhard",
    "funktion":"KRAFTF",
    "Kürzel":"FM",
    "Bezeichnung":"Kraftfahrer"
  }
]


export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_MANNSCHAFT:
      return action.data
    default:
      return state;
  }
}
