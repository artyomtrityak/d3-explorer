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


import L from 'leaflet';
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);
