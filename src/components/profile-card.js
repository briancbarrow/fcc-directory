import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import {connect}  from 'react-redux';

class ProfileCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render(props) {
    return(
      <div className="card">
        <p className="name">{this.props.info.first_name}</p>
        <img src={this.props.info.image} className="profile-image" alt="profile"/>
        <div className="link-bar">
          {this.props.info.badges.map(function(badge, index) {
            if(badge.visible === true){
              return <a key={index} className="badge-link" href={badge.link}> <FontAwesome className="badge" name={badge.name} key={badge.name} /></a>
            } else {
              return false
            }
          })}

        </div>
      </div>
    )
  }
}

export default connect()(ProfileCard);
