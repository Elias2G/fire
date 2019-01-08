import { FETCH_NEWS } from '../actions/type';

const initState = [
    {
        Titel: "Übung",
        Datum: 2008,
    }
  ]

export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_NEWS:
      return action.data
    default:
      return state;
  }
}
