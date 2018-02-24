// @flow
import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/configureStore';

class App extends PureComponent<void> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" />
            <Route />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
