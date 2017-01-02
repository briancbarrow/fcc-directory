import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Effect, Actions } from 'jumpsuit'
import axios from 'axios'

Effect('postProfile', (data) => {
  return axios.post('https://directory-server.herokuapp.com/post')
    .then((res) => {
      console.log(res)
    })
})

const myData = {
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
  }

class HeaderBar extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    // Actions.postProfile(this.myData)
    console.log(myData)
  }

  render() {
    return (
      <div className="header-bar">
        <div className="login-button" onClick={this.handleSubmit}>Log In with Github <FontAwesome name='github' />
        </div>
      </div>
    );
  }
}

export default HeaderBar;
