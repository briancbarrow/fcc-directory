import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './styles/app.css'
import {Render} from 'jumpsuit'
import state from './states/state'

Render(state, <App />)

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
