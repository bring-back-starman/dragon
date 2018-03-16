// @flow
import React, { PureComponent } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/index';

class App extends PureComponent<void> {
  render() {
    return (
      <Switch>
        <Redirect exact to="/missions/upcoming" from="/" />
        <Route path="/missions/:type" component={HomePage} />
        <Route />
      </Switch>
    );
  }
}

export default withRouter(App);
