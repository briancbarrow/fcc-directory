import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import App from './App';
import {Render} from 'jumpsuit'
import state from './states/state'

it('renders without crashing', () => {
  // console.log(App)
  // shallow(<App />);
  const div = document.createElement('div');
  div.setAttribute("id", "app");
  ReactDOM.render(<App />, div);
  // Render(state, <App />)
});
