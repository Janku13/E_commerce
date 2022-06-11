import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger];

if (process.env.REACT_APP_NODE_ENV == 'development') {
  middlewares.push(logger);
}
console.log(middlewares);
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger))
);
export const persistor = persistStore(store);
