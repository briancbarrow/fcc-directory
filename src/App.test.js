import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Render} from 'jumpsuit'
import state from './states/state'

Render(state, <App />)

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  Render(state, <App />)
});
