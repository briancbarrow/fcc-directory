import React, { Component } from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import  * as actions from '../actions/index'

class IntroModal extends Component {

  render() {
    return(
      <div className="intro-modal">
        <h1>Welcome to the FreeCodeCamp Salt Lake City Directory</h1>
        <p>We have created this directory for members of the FreeCodeCamp meetup group in Salt Lake City</p>
        <p>This page allows us to showcase our portfolio links (the <FontAwesome name='globe' /> icons) as well as social media links</p>
        <p>Anybody can join. All you need is a GitHub account to login. After logging in you can access your profile information which determines which links will display on your profile card.</p>
        <button className="close-modal" onClick={this.props.updateModal}>Go To Directory</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateModal: () => {
      return dispatch(actions.updateModal())
    }
  }
}

export default connect(null, mapDispatchToProps)(IntroModal);
