import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: { value: '', valid: false },
      password: { value: '', valid: false },
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  submitButton() {
    const { email: { value } } = this.state;
    const { loginFunc } = this.props;
    loginFunc(value);
  }

  handleChange(event) {
    const { name, value } = event.target;
    let valid = false;
    const six = 6;
    switch (name) {
    case 'email':
      valid = value.includes('.com') && value.includes('@');
      this.setState({
        [name]: { value, valid },
      });
      break;
    case 'password':
      valid = value.length >= six;
      this.setState({
        [name]: { value, valid },
      });
      break;
    default:
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input
            type="email"
            name="email"
            placeholder="email"
            data-testid="email-input"
            value={ email.value }
            onChange={ this.handleChange }
            required
          />
          <input
            type="password"
            name="password"
            placeholder="senha"
            data-testid="password-input"
            value={ password.value }
            onChange={ this.handleChange }
            required
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ !(email.valid && password.valid) }
              onClick={ this.submitButton }
            >
              Entrar
            </button>
          </Link>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginFunc: (email) => dispatch(login(email)),
});

Login.propTypes = {
  loginFunc: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
