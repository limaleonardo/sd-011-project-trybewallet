import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { validateLogin } from '../actions';

class Button extends Component {
  render() {
    const { validateNewLogin, disabled, email, password } = this.props;
    return (
      <Link to="/carteira">
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => validateNewLogin(email, password) }
        >
          Entrar
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  validateNewLogin: (email, password) => dispatch(validateLogin(email, password)),
});

export default connect(null, mapDispatchToProps)(Button);

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  validateNewLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
