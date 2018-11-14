import { FETCH_EINSAETZE } from '../actions/type';

import { determine } from '../actions';

const initState = [
    {
      array: {
        Datum: 2008,
      }
    }
  ]

export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_EINSAETZE:
    const dataArray = []
      action.data.map((data, i) => {
        var { Brandeinsatz, Techn_Einsatz, Techn_Hilfe } = data;
        if( Brandeinsatz.data[0] === 1 || Techn_Einsatz.data[0] === 1 || Techn_Hilfe.data[0] === 1) {
          dataArray.push(data)
        }
      })
      return {array: dataArray};
    default:
      return state;
  }
}
