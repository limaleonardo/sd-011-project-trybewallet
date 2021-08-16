import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionSetUser } from '../actions/index';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      validEmail: false,
      validPassword: false,

    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  validateEmail({ target: { value: email } }) {
    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // usado pela W3E
    this.setState(() => ({
      email,
      validEmail: re.test(String(email).toLowerCase()),
    }));
  }

  validatePassword({ target: { value: password } }) {
    const five = 5;
    const validPassword = (password.length > five);

    this.setState(() => ({
      validPassword,
    }));
  }

  checkLogin() {
    const { validEmail, validPassword } = this.state;

    if (!validEmail || !validPassword) return true;
  }

  render() {
    const { dispatchSetUser } = this.props;
    const { email } = this.state;

    return (
      <form>
        <div className="mb-3">
          <label className="form-label text-muted" htmlFor="email">
            <input
              className="form-control"
              id="email"
              data-testid="email-input"
              type="email"
              placeholder="Entre com seu email"
              onChange={ this.validateEmail }
            />

            example@example.com
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label text-muted" htmlFor="password">
            <input
              id="password"
              className="form-control"
              data-testid="password-input"
              type="password"
              placeholder="Senha"
              onChange={ this.validatePassword }
            />
            Sua senha, por favor!
          </label>
        </div>

        <Link to="/carteira" className="d-grid gap-2 ">
          <button
            type="button"
            className="btn btn-success"
            size="lg"
            disabled={ this.checkLogin() }
            onClick={ () => { dispatchSetUser(email); } }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetUser: (email) => dispatch(actionSetUser(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  dispatchSetUser: PropTypes.func.isRequired,
};
