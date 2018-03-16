import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createBrowserHistory } from 'history';
import { ConnectedRouter as Router } from 'react-router-redux';

import configureStore from 'store/configureStore';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';

import 'index.css';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});
const history = createBrowserHistory();
const initialState = {};
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>,
  MOUNT_NODE,
);
registerServiceWorker();
