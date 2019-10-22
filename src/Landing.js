import React, { Component } from 'react';
import logo from './logo.svg';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="Landing-header">
          <img src={logo} className="Landing-logo" alt="logo" />
          <h2>Welcome {this.props.name}</h2>
        </div>
        <p className="Landing-intro">
          Learn mathematics by using the formulas!
        </p>
      </div>
    );
  }
}

export default Landing;
