import React, { Component } from 'react';
import {connect}  from 'react-redux';
import HeaderBar from './components/header-bar'
import ProfileCard from './components/profile-card'
import * as actions from './actions/index'

import './App.css'

class App extends Component {

componentWillMount() {
  console.log(this.props.profiles)
  this.props.getProfiles()
}

  render(props) {
    console.log(this.props.profiles)
    return (
      <div className="App">
        <HeaderBar />
        <h1 className="heading">Free Code Camp - Salt Lake City</h1>
        <h3 className="sub-heading">Directory</h3>
        {this.props.profiles.length >= 1 ?
          <div className="profiles">
            {this.props.profiles.map(function(profile, index) {
              return <ProfileCard key={index} info={profile} />
            })}
          </div>
          : ""}
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    getProfiles: () => {
      return dispatch(actions.getProfiles())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
