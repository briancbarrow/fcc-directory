import * as actions from '../actions/index'
import axios from 'axios'

const initialState = {
  profiles: [
    {
      name: "Brian Barrow",
      badges: [
        {
          name: "github",
          link: 'https://github.com/briancbarrow'
        },
        {
          name: "rocket",
          link: 'not a link'
        }
      ],
      image: 'http://68.media.tumblr.com/67dca3f7eeca5c98e9e057bc046d2b6c/tumblr_o1czyeSHqS1v23hsyo1_500.png'
    },
    {
      name: "Nick Coleman",
      badges: [
        {
          name: "github",
          link: 'https://github.com/nickcoleman'
        },
        {
          name: "rocket",
          link: 'not a link'
        }
      ],
      image: 'http://68.media.tumblr.com/67dca3f7eeca5c98e9e057bc046d2b6c/tumblr_o1czyeSHqS1v23hsyo1_500.png'
    },
    {
      name: "Alvaro",
      badges: [
        {
          name: "github",
          link: 'https://github.com/nickcoleman'
        },
        {
          name: "rocket",
          link: 'not a link'
        }
      ],
      image: 'http://68.media.tumblr.com/67dca3f7eeca5c98e9e057bc046d2b6c/tumblr_o1czyeSHqS1v23hsyo1_500.png'
    }
  ]
}



export const directoryReducer = (state=initialState, action) => {
  if (action.type === actions.POST_PROFILE) {
    console.log("Effect Triggered")
    console.log(action.data)
    return axios.post('https://directory-server.herokuapp.com/post', action.data)
      .then(function (res) {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return state
}
