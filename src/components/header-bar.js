import React, { Component } from 'react'
import {connect}  from 'react-redux'
import FontAwesome from 'react-fontawesome'
import * as actions from '../actions/index'
// import axios from 'axios'


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
        <div className="login-button" onClick={this.handleSubmit}>Log In with Github <FontAwesome name='github' />
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
    }
  }
}

export default connect(null, mapDispatchToProps)(HeaderBar);
