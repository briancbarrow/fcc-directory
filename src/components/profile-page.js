import React, { Component } from 'react';
import {connect}  from 'react-redux';
import FontAwesome from 'react-fontawesome'
import * as actions from '../actions/index';

let currentUser = {}
let currentBadges = [
  // {"name": "github", "link": this.props, visible: true},
  // {"name": "free-code-camp", "link": "", visible: false},
  // {"name": "twitter", "link": "", visible: false},
  // {"name": "linkedin", "link": "", visible: false},
  // {"name": "globe", "link": "", visible: false}
]



class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

componentDidMount() {
  currentUser = this.props.data.user
  currentBadges = this.props.data.user.badges
  console.log(currentBadges)
  console.log(currentUser)
}

  handleClose() {
    this.props.hideProfile()
  }

  handleChange(event) {
    console.log(this.props)
    for(var i = 0; i < currentBadges.length; i++) {
      if(event.target.id === currentBadges[i].name) {
        currentBadges[i].link = event.target.value
      }
      if(currentBadges[i].link.length !== 0) {
        currentBadges[i].visible = true
      } else {
        currentBadges[i].visible = false
      }
    }
    // this.props.updateUser(currentBadges)
    Object.assign({}, currentUser, {badges: currentBadges})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.data.user)

    console.log(currentUser)
    this.props.updateProfile(currentUser)
  }

  render(props) {
    console.log(this.props.data.user.badges)
    return (
      <div className="profile-page">
        <FontAwesome size='2x' className="profile-close" name='close' onClick={this.handleClose}/>
        <h1>{this.props.data.user.name}</h1>
        <form id="profile-form">
          <div>
            <label htmlFor="free-code-camp">FreeCodeCamp<input value={this.props.data.user.badges[1].link} id="free-code-camp" onChange={this.handleChange}/></label>
            <label htmlFor="twitter">Twitter<input value={this.props.data.user.badges[3].link} id="twitter" onChange={this.handleChange}/></label>
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn<input value={this.props.data.user.badges[4].link} id="linkedin" onChange={this.handleChange}/></label>
            <label htmlFor="globe">Portfolio<input value={this.props.data.user.badges[5].link} id="globe" onChange={this.handleChange}/></label>
          </div>
          <input id="profile-button" onClick={this.handleSubmit} type="button" value="Submit Changes"/>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideProfile: () => {
      return dispatch(actions.hideProfile())
    },
    updateUser: (badges) => {
      return dispatch(actions.updateUser(badges))
    },
    updateProfile: (userData) => {
      return dispatch(actions.updateProfile(userData))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
