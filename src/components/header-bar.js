import React, { Component } from 'react'
import {connect}  from 'react-redux'
import FontAwesome from 'react-fontawesome'
import firebase from 'firebase'
// import reactMixin from 'react-mixin'
// import ReactFireMixin from 'reactfire';
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
    const self = this;
    provider.addScope('read:org')
    // self.props.updateProfile({uid: 13695093})

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user;
      /// Code to get users orgs, isn't working at the moment, revist


      axios.get('https://api.github.com/user?access_token=' + token)
        .then(function(response) {
          user = {
            'name': response.data.name,
            'first_name': response.data.name.slice(0, response.data.name.indexOf(" ")),
            'badges': [
              {"name": "github", "link": response.data.html_url, visible: true},
              {"name": "free-code-camp", "link": "", visible: false},
              {"name": "stack-overflow", "link": "", visible: false},
              {"name": "twitter", "link": "", visible: false},
              {"name": "linkedin", "link": "", visible: false},
              {"name": "globe", "link": "", visible: false}
            ],
            'image': response.data.avatar_url,
            'visible': true,
            "uid": response.data.id
          }
          let isInDirectory = self.props.data.profiles.filter(function(user) {
            return user.uid = user.uid
          })
          if(isInDirectory.length === 1) {
            console.log(user)
            self.props.logIn(user.name)
          } else {
            axios.get('https://api.github.com/users/' + response.data.login + '/orgs')
            .then(function(response) {
              let isMember = response.data.filter(function(org) {
                return org.id = 18537321
              })

              console.log(user)
              if(isMember.length === 1) {
                self.props.logIn(user.name)
                self.props.postProfile(user).then(() => {
                  self.props.getProfiles()
                })
              }

            }).catch(function(error) {
              console.log(error)
            })
          }
        })
    }).catch(function(error) {
      console.log(error)
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    // this.props.postProfile(myData)
    this.props.getGithubAccess()
    // console.log(myData)
  }

  render(props, user) {
    return (
      <div className="header-bar">
        {this.props.data.loggedIn ? <div className="header-user"><FontAwesome name='github' /> Hi, {this.props.data.userName.slice(0, this.props.data.userName.indexOf(" "))}</div> : <div className="login-button" onClick={this.handleLogin}>Log In with Github <FontAwesome name='github' /></div> }
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
    },
    updateProfile: (data) => {
      return dispatch(actions.updateProfile(data))
    },
    logIn: (username) => {
      return dispatch(actions.logIn(username))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

// reactMixin(HeaderBar.prototype, ReactFireMixin)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
