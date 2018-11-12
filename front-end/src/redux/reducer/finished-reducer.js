import { SAVE_MANNSCHAFT } from '../actions/type';

const initState = []

export default function(state = initState, action) {
  switch(action.type) {
    case SAVE_MANNSCHAFT:
      return action.data
    default:
      return state;
  }
}
