import { CREATE_STAT } from '../actions/type';

const initState = [
  {
    year: '2003',
    einsätze: {
      Brandeinsatz: 5,
      Techn_Einsatz: 4,
      Techn_Hilfe: 27
    }
  },
  {
    year: '2004',
    einsätze: {
      Brandeinsatz: 34,
      Techn_Einsatz: 5,
      Techn_Hilfe: 25
    }
  },
]

export default function(state = initState, action) {
  switch(action.type) {
    case CREATE_STAT:
      return action.data;
    default:
      return state;
  }
}
