import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { sort } from './sort.reducer';
import { direction } from './direction.reducer'

const rootReducer = combineReducers({
  authentication,
  alert,
  sort,
  direction
});

export default rootReducer;
