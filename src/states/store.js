import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import * as reducers from '../reducers/index';

export default createStore(reducers.directoryReducer, applyMiddleware(thunk));
