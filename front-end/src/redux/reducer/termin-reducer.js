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
      return action.data
    default:
      return state;
  }
}
