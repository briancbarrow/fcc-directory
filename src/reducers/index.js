import * as actions from '../actions/index'

const initialState = {
  profiles: [],
  loading: false,
  loadText: "Loading",
  loadSpeed: 300,
  user: {},
  loggedIn: false,
  showProfile: false,
}



export const directoryReducer = (state=initialState, action) => {
  if (action.type === actions.UPDATE_PROFILES) {
    return Object.assign({}, state, {profiles: action.data})
  } else if (action.type === actions.SET_TEXT) {
    return Object.assign({}, state, {loadText: action.text})
  } else if (action.type === actions.LOG_IN) {
    return Object.assign({}, state, {user: action.user, loggedIn: true})
  } else if (action.type === actions.VIEW_PROFILE) {
    return Object.assign({}, state, {showProfile: true})
  } else if (action.type === actions.HIDE_PROFILE) {
    return Object.assign({}, state, {showProfile: false})
  } else if (action.type === actions.UPDATE_USER) {
    return Object.assign({}, state.user, {badges: action.badges})
  }
  return state
}
