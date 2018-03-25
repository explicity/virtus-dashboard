import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { sort } from './sort.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  sort
});

export default rootReducer;
