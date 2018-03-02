// @flow
import React, { PureComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import configureStore from 'store/configureStore';

import HomePage from 'containers/HomePage';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql',
});
const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

class App extends PureComponent<void> {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router history={history}>
            <Switch>
              <Redirect exact to="/missions/upcoming" from="/" />
              <Route path="/missions/:filter" component={HomePage} />
              <Route />
            </Switch>
          </Router>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
