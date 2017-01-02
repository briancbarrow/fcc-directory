import axios from 'axios'

export const NEW_PROFILE = 'NEW_PROFILE'
export const newProfile = (data) => ({
  type: NEW_PROFILE,
  data
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
