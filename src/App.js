import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import { fetchChapters } from "./redux/slices/content";

import Main from "./components/pages/Main";
import Chapter from "./components/pages/Chapter";

store.dispatch(fetchChapters());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route component={Main} path='/' strict exact />
          <Route component={Chapter} path='/chapters/:id' strict exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
