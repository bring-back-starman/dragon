import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createBrowserHistory } from 'history';
import { ConnectedRouter as Router } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';

import configureStore from 'store/configureStore';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

import '@fortawesome/fontawesome';
import 'index.css';

// Pass your GraphQL endpoint to uri
const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
const history = createBrowserHistory();
const initialState = {};
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');

const theme = {
  colors: {
    primary: '#2F3139',
    secondary: '#EBEDF2',
    white: '#FFF',
    light: 'rgba(0, 0, 0, 0.3)',
    grey: 'rgba(0, 0, 0, 0.5)',
    dark: 'rgba(0, 0, 0, 0.7)',
  },
};

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  </Provider>,
  MOUNT_NODE,
);
registerServiceWorker();
