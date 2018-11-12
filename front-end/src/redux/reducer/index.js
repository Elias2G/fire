import { combineReducers } from 'redux';

import dataReducer from './data-reducer';
import einsatzReducer from './einsatz-reducer';
import mannschaftReducer from './mannschaft-reducer';
import teamReducer from './finished-reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  einsatz: einsatzReducer,
  mannschaft: mannschaftReducer,
  team: teamReducer,
});

export default rootReducer;
