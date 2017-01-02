import React, { Component } from 'react';
import {connect}  from 'react-redux';
import HeaderBar from './components/header-bar'
import ProfileCard from './components/profile-card'
// import * as actions from './actions/index'

import './App.css'

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <HeaderBar />
        <h1 className="heading">Free Code Camp - Salt Lake City</h1>
        <h3 className="sub-heading">Directory</h3>
        <div className="profiles">
          {this.props.profiles.map(function(profile, index) {
            return <ProfileCard key={profile.name} info={profile} />
          })}
        </div>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     postProfile: (data) => {
//       return dispatch(actions.postProfile(data))
//     }
//   }
// }

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles
  }
}

export default connect(mapStateToProps, null)(App);
