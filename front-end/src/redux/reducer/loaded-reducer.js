import { FETCH_TERMINE, FETCH_EINSAETZE, FETCH_NEWS } from '../actions/type';

const initState =
    {
      loaded: {
        Mannschaft: false,
        Statistik: false,
        Einsätze: false,
        Termine: false,
        Kontakt: false,
        Notruf: false,
        Einsatzgebiet: false,
        Fahrzeuge: false
      }
    }


export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_EINSAETZE:
      return  { loaded: { ...state.loaded, Einsätze: true, Statistik: true } }
    default:
      return state;
  }
}
