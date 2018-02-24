/* eslint-disable no-underscore-dangle */
import appReducer from 'store/reducers';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(applyMiddleware());

const store = createStore(appReducer, enhancer);

export default store;
