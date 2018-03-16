// @flow
import React, { PureComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage';

class App extends PureComponent<void> {
  render() {
    return (
      <Switch>
        <Redirect exact to="/missions/upcoming" from="/" />
        <Route path="/missions/:filter" component={HomePage} />
        <Route />
      </Switch>
    );
  }
}

export default App;
