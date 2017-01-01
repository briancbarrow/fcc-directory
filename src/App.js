import React from 'react';
import HeaderBar from './components/header-bar'
import ProfileCard from './components/profile-card'
import { Component } from 'jumpsuit'

import './App.css'
// import FontAwesome from 'react-fontawesome'

const App = Component ({
  render(props) {
    return (
      <div className="App">
        <HeaderBar />
        <h1 className="heading">Free Code Camp - Salt Lake City</h1>
        <h3 className="sub-heading">Directory</h3>
        <div className="profiles">
          {this.props.info.map(function(profile, index) {
            console.log(profile);
            return <ProfileCard info={profile} />
          })}
        </div>
      </div>
    )
  }
}, (state) => {
  return {
    info: state.main.profiles
  }
})

export default App;
