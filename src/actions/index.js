import axios from 'axios'

export const NEW_PROFILE = 'NEW_PROFILE'
export const newProfile = (data) => ({
  type: NEW_PROFILE,
  data
})

export const UPDATE_PROFILES = 'UPDATE_PROFILES'
export const updateProfilesState = (data) => ({
  type: UPDATE_PROFILES,
  data
})

export const SET_TEXT = 'SET_TEXT'
export const setText = (text) => ({
  type: SET_TEXT,
  text
})

export const postProfile = (data) => {
  return dispatch => {
    console.log("Effect Triggered")
    console.log(data)
    return axios.post('https://directory-server.herokuapp.com/post', data)
    .then(function (res) {
      console.log(res)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export const getProfiles = () => {
  return dispatch => {
    return axios.get('https://directory-server.herokuapp.com/profiles')
    .then(res => {
      console.log(res)
      dispatch(updateProfilesState(res.data))
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export const getGithubAccess = () => {
  return dispatch => {
    return axios.get('https://github.com/login/oauth/authorize', {
      client_id: '431ac7b1f08d41e714e5',
      scope: 'user'
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
