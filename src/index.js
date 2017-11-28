import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from './components/Application/Application';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>

  ,document.getElementById('root')
);
