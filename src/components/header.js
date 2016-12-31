import React, { Component } from 'react';

class Header extends Component {
  handleSubmit(event) {
    event.preventDefault()
  }


  render() {
    return (
      <div className="Header">
        <div className="login-button">Log In with Github</div>
      </div>
    );
  }
}

export default Header;
