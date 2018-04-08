import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import rootReducer from './../reducers';

const logger = store => next => (action) => {
  next(action);
};

const middleware = applyMiddleware(promise(), thunk, logger);

export default createStore(rootReducer, middleware);
