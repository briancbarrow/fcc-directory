import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import * as reducers from '../reducers/index';

const fbConfig = {}
const config = {
  userProfile: 'users',
  enableLogging: false
}
const store = createStore(
  reducers.directoryReducer, // not sure if I need the ()
  compose(
    applyMiddleware([
      thunk.withExtraArgument(getFirebase)
    ]),
    reactReduxFirebase(fbConfig, )
  )
)

export default createStore(reducers.directoryReducer, applyMiddleware(thunk));
