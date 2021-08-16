import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import LoginForm from './LoginForm';

export default class LoginCard extends Component {
  render() {
    return (
      <div className="container-fluid loginCardContainer">
        <div
          className="card border-dark mb-3 login-card"
        >
          <img
            className="card-img-top"
            alt="desenho de uma carteira laranja"
            src="/login.png"
          />
          <div className="card-body">
            <LoginForm />
          </div>
        </div>
      </div>

    );
  }
}
