// @flow
import React, { PureComponent } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/index';
import Layout from 'components/Layout';
import NotFound from 'components/NotFound';

class App extends PureComponent<void> {
  render() {
    return (
      <Layout>
        <Switch>
          <Redirect exact to="/missions/upcoming" from="/" />
          <Route path="/missions/:type" component={HomePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
