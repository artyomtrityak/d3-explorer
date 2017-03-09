import '../styles/index.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import Page from './components/page';


const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById(('root'))
);
