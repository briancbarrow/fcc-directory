import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { shallow } from 'enzyme'
import App from './App';
import store from './states/store'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , div);
});
