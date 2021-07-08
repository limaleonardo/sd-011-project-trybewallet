import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ 0 }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

// Função responsável por mapear a store, e colocar dentro da prop email.
// Neste caso quero o email de meu reducer user.
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
