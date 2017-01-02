import * as actions from '../actions/index'
// import axios from 'axios'

const initialState = {
  profiles: [],
  loadText: "Loading",
  loadSpeed: 300
}



export const directoryReducer = (state=initialState, action) => {
  if (action.type === actions.UPDATE_PROFILES) {
    return Object.assign({}, state, {profiles: action.data})
  } else if (action.type === actions.SET_TEXT) {
    return Object.assign({}, state, {loadText: action.text})
  }
  return state
}
