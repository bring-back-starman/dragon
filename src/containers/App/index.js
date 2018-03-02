// @flow
import React, { PureComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';
import HomePage from 'containers/HomePage';

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

class App extends PureComponent<void> {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Redirect exact to="/missions/upcoming" from="/" />
            <Route path="/missions/:filter" component={HomePage} />
            <Route />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
