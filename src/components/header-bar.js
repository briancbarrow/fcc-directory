import React, { Component } from 'react'
import {connect}  from 'react-redux'
import FontAwesome from 'react-fontawesome'
import firebase from 'firebase'
import reactMixin from 'react-mixin'
import ReactFireMixin from 'reactfire';
import * as actions from '../actions/index'
import axios from 'axios'



// const myData = {
//     name: "Brian Barrow",
//     badges: [
//       {
//         name: "github",
//         link: 'https://github.com/briancbarrow'
//       },
//       {
//         name: "rocket",
//         link: 'not a link'
//       }
//     ],
//     image: 'http://68.media.tumblr.com/67dca3f7eeca5c98e9e057bc046d2b6c/tumblr_o1czyeSHqS1v23hsyo1_500.png'
//   }

class HeaderBar extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin = function(props) {
    // event.preventDefault()
    var provider = new firebase.auth.GithubAuthProvider()

    provider.addScope('user:email, read:org')

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      ///// Code to get users orgs, isn't working at the moment, revist
      // axios.get('https://api.github.com/user/orgs?access_token=' + token)
      // .then(function(response) {
      //   console.log("orgs", response)
      // }).catch(function(error) {
      //   console.log(error)
      // })

      axios.get('https://api.github.com/user?access_token=' + token)
        .then(function(response) {
          console.log(response.data)
          const data = {
            'first_name': response.data.name,
            'name': response.data.name.slice(0, response.data.name.indexOf(" ")),
            'badges': [{"name": "github", "link": response.data.html_url}],
            'image': response.data.avatar_url,
            'visible': true,
            "uid": response.data.id
          }
          this.props.postProfile(data).then(() => {
            this.props.getProfiles()
          })
        })
    }).catch(function(error) {
      console.log(error)
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    // this.props.postProfile(myData)
    // this.props.getGithubAccess()
    // console.log(myData)
  }

  render(props) {
    return (
      <div className="header-bar">
        <div className="login-button" onClick={this.handleLogin}>Log In with Github <FontAwesome name='github' />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postProfile: (data) => {
      return dispatch(actions.postProfile(data))
    },
    getGithubAccess: () => {
      return dispatch(actions.getGithubAccess())
    },
    getProfiles: () => {
      return dispatch(actions.getProfiles())
    }
  }
}

reactMixin(HeaderBar.prototype, ReactFireMixin)

export default connect(null, mapDispatchToProps)(HeaderBar);
