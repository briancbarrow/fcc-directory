// import {createStore, applyMiddleware, compose} from 'redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import * as reducers from '../reducers/index';

// const fbConfig = {
//   apiKey: "AIzaSyDfL6mO4woZJH0tsw49JpHzrrR56cF_Rz0",
//   authDomain: "directory-fcc-slc.firebaseapp.com",
//   databaseURL: "https://directory-fcc-slc.firebaseio.com",
//   storageBucket: "directory-fcc-slc.appspot.com",
//   messagingSenderId: "763650547862"
// }
// const config = {
//   userProfile: 'users',
//   enableLogging: false
// }
// const store = createStore(
//   reducers.directoryReducer, // not sure if I need the ()
//   compose(
//     applyMiddleware([
//       thunk.withExtraArgument(getFirebase)
//     ]),
//     reactReduxFirebase(fbConfig, )
//   )
// )

export default createStore(reducers.directoryReducer, applyMiddleware(thunk));
