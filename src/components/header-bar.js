import React, { Component } from 'react'
import {connect}  from 'react-redux'
import FontAwesome from 'react-fontawesome'
import firebase from 'firebase'
// import reactMixin from 'react-mixin'
// import ReactFireMixin from 'reactfire';
import * as actions from '../actions/index'
import logo from '../images/logo.png'
import axios from 'axios'


// {
//     "_id": {
//         "$oid": "5876f6e08a2bbf00117c6a1e"
//     },
//     "name": "Brian Barrow",
//     "first_name": "Brian",
//     "image": "https://avatars.githubusercontent.com/u/13695093?v=3",
//     "visible": true,
//     "uid": 13695093,
//     "badges": [
//         {
//             "visible": true,
//             "link": "https://github.com/briancbarrow",
//             "name": "github"
//         },
//         {
//             "visible": true,
//             "link": "https://www.freecodecamp.com/briancbarrow",
//             "name": "free-code-camp"
//         },
//         {
//             "visible": false,
//             "link": "",
//             "name": "stack-overflow"
//         },
//         {
//             "visible": true,
//             "link": "https://twitter.com/the_BrianB",
//             "name": "twitter"
//         },
//         {
//             "visible": true,
//             "link": "https://www.linkedin.com/in/barrowbrian",
//             "name": "linkedin"
//         },
//         {
//             "visible": false,
//             "link": "",
//             "name": "globe"
//         }
//     ],
//     "__v": 0
// }
class HeaderBar extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
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
          let isInDirectory = self.props.data.profiles.filter(function(profile) {
            console.log(profile, user)
            return profile.uid === user.uid
          })
          if(isInDirectory.length === 1) {
            console.log(isInDirectory)
            console.log(user)
            let currentUser = self.props.data.profiles.find((profile) => {
              return profile.uid === user.uid
            })
            self.props.logIn(currentUser)
          } else {
            console.log("else", user)
            // axios.get('https://api.github.com/users/' + response.data.login + '/orgs')
            // .then(function(response) {
              // Removing check on GitHub Membership
              // let isMember = response.data.filter(function(org) {
              //   return org.id = 18537321
              // })
              // if(isMember.length === 1) {
                self.props.logIn(user)
                self.props.postProfile(user).then(() => {
                  self.props.getProfiles()                    
                })
              // }
            // }).catch(function(error) {
            //   console.log(error)
            // })
          }
        })
    }).catch(function(error) {
      console.log(error)
    })
  }

  handleMenuClick() {
    this.props.viewProfile();
  }

  handleSubmit(event) {
    event.preventDefault()
    // this.props.postProfile(myData)
    this.props.getGithubAccess()
    // console.log(myData)
  }

  render(props) {
    return (
      <div className="header-bar">
        {this.props.data.loggedIn ? <div className="div-wrapper">
          <img className="logo" src={logo} alt="FreeCodeCamp Salt Lake City logo" />
          <div className="header-user" onClick={this.handleMenuClick}>
            <FontAwesome className="menu-bars" name='bars' />
            <div className="user-name">
               {this.props.data.user.first_name}
            </div>
          </div>
          </div> : <div className="login-button" onClick={this.handleLogin}>Log In with Github <FontAwesome name='github' /></div> }
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
    },
    viewProfile: () => {
      return dispatch(actions.viewProfile())
    },
    hideProfile: () => {
      return dispatch(actions.hideProfile())
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
