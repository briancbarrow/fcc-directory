import React, { Component } from 'react';
import {connect}  from 'react-redux';
import HeaderBar from './components/header-bar'
import ProfileCard from './components/profile-card'
import Loading from './components/loading'
import ProfilePage from './components/profile-page'
import * as actions from './actions/index'

import './App.css'

class App extends Component {
state = {loading: false,
          dots: []}

componentDidMount() {
  this.setState({loading: true})
  this.interval = setInterval(() => {
    if(this.state.dots.length === 3) {
      return this.setState({dots: []})
    }
    this.setState({dots: [...this.state.dots, '.']})
  }, this.props.data.loadSpeed)
  this.props.getProfiles().then(() => {
    this.setState({loading: false},() => {
      clearInterval(this.interval)
    })
  })
}

  render(props) {
    return (
      <div className="App">
        <HeaderBar />
        <h1 className="heading">Free Code Camp - Salt Lake City</h1>
        <h3 className="sub-heading">Directory</h3>
        {this.state.loading ? <Loading dots={this.state.dots}/> : (
          <div>
            {this.props.data.profiles.length > 0 ?
            <div className="profiles">
              {this.props.data.profiles.map(function(profile, index) {
                return <ProfileCard key={index} info={profile} />
              })}
            </div>
            : <div><h1>No Profiles Yet</h1></div>}
          </div>
        )}
        {this.props.data.showProfile ? <ProfilePage /> : ""}
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
    data: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
