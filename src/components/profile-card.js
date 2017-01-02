import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
// import logo from '../logo.svg'

class ProfileCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render(props) {
    return(
      <div className="card">
        <p className="name">{this.props.info.name}</p>
        <img src={this.props.info.image.profileImage} className="profile-image" alt="profile"/>
        <div className="link-bar">
          {this.props.info.badges.map(function(badge, index) {
            return <a className="badge-link" href={badge.link}> <FontAwesome name={badge.name} key={badge.name} /></a>
          })}

        </div>
      </div>
    )
  }
}

export default ProfileCard
