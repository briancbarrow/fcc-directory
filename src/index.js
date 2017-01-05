import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import './styles/app.css'
import * as firebase from 'firebase'
// import {Render} from 'jumpsuit'
import store from './states/store'

var config = {
  apiKey: "AIzaSyDfL6mO4woZJH0tsw49JpHzrrR56cF_Rz0",
  authDomain: "directory-fcc-slc.firebaseapp.com",
  databaseURL: "https://directory-fcc-slc.firebaseio.com",
  storageBucket: "directory-fcc-slc.appspot.com",
  messagingSenderId: "763650547862"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
