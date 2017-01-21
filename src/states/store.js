import {createStore, applyMiddleware} from 'redux'
import * as reducers from '../reducers/index';

export default createStore(reducers.directoryReducer, applyMiddleware(thunk));
