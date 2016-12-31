import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('testing')
  }


  render() {
    return (
      <div className="main-header">
        <div className="login-button" onClick={this.handleSubmit}>Log In with Github <FontAwesome name='github' />
        </div>
      </div>
    );
  }
}

export default Header;
