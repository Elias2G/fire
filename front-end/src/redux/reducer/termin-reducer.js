import { FETCH_TERMINE } from '../actions/type';

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
    case FETCH_TERMINE:
    const dataArray = []
      action.data.map((data, i) => {
        var { Monatsübung, Übung_Sonstige, Festbesuch } = data;
        console.log(data);
        if( Monatsübung.data[0] === 1 || Übung_Sonstige.data[0] === 1 || Festbesuch.data[0] === 1) {
          dataArray.push(data)
        }
      })
      console.log(dataArray);
      return {array: dataArray};
    default:
      return state;
  }
}
