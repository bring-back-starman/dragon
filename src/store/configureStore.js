/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import createReducer from 'store/reducers';

export default function configureStore(initialState = {}, history) {
  const appReducer = createReducer();

  const middlewares = [
    // App middlewares

    // Package middlewares
    routerMiddleware(history),
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  // use Redux DevTools Chrome extension if available
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  return createStore(appReducer, initialState, composeEnhancers(...enhancers));
}
