import React, { Component } from 'react';
import {connect}  from 'react-redux';
import FontAwesome from 'react-fontawesome'
import * as actions from '../actions/index';

let currentUser = {}
let currentBadges = []



class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      submitted: false
    };
  }



  componentDidMount() {
    currentUser = this.props.data.user
    currentBadges = this.props.data.user.badges
  }

  handleClose() {
    this.props.hideProfile()
  }

  handleChange(event) {
    event.preventDefault()
    console.log(event.target.value)
    console.log(currentBadges, this.props.data.user.badges)
    for(var i = 0; i < currentBadges.length; i++) {
      if(event.target.id === currentBadges[i].name) {
        console.log(currentUser, currentBadges[i].link)
        currentBadges[i].link = event.target.value
      }
      if(currentBadges[i].link.length !== 0) {
        currentBadges[i].visible = true
      } else {
        currentBadges[i].visible = false
      }
    }
    Object.assign({}, currentUser, {badges: currentBadges})
  }

  handleSubmit(event) {
    var timesRun = 0;
    event.preventDefault();
    console.log(this.state)
    this.setState({submitted: true})
    console.log(this.state)
    this.interval = setInterval(() => {
      timesRun += 1;
      if(timesRun === 1){
          clearInterval(this.interval);
      }
      this.setState({submitted: false})
      console.log(this.state)
    }, 3000)
    this.props.updateProfile(currentUser)
  }
  render(props) {
    return (
      <div className="profile-page">
        <FontAwesome size='2x' className="profile-close" name='close' onClick={this.handleClose}/>
        <h1>{this.props.data.user.name}</h1>
        <form id="profile-form">
          <div>
            <label htmlFor="free-code-camp">FreeCodeCamp<input value={this.props.testBadges[1].link} id="free-code-camp" onChange={this.handleChange}/></label>
            <label htmlFor="twitter">Twitter<input value={this.props.testBadges[3].link} id="twitter" onChange={this.handleChange}/></label>
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn<input value={this.props.testBadges[4].link} id="linkedin" onChange={this.handleChange}/></label>
            <label htmlFor="globe">Portfolio<input value={this.props.testBadges[5].link} id="globe" onChange={this.handleChange}/></label>
          </div>
          <input id="profile-button" onClick={this.handleSubmit} type="button" value="Submit Changes"/>
        </form>
        {this.state.submitted ? <p className="submitted">Profile Updated. Information will be shown after page refresh.</p> : ""}
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
