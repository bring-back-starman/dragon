import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';

import missions from './missions/reducer';

// Initial routing state
const routeInitialState = {
  location: null,
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return flow(set('location', action.payload))(state);
    default:
      return state;
  }
}

export default function createReducer() {
  return combineReducers({
    route: routeReducer,
    missions,
  });
}
