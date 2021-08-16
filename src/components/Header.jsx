import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  updateTotal(expenses) {
    const total = expenses.reduce((acc, exp) => (
      acc + exp.value * exp.exchangeRates[exp.currency].ask), 0);
    return (parseFloat(total).toFixed(2));
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <header className="container-fluid walletHeader">
        <img className="headerImg" src="/login.png" alt="Icone de uma carteira laranja" />
        <div className="informations">
          <div>
            Email:
            <span data-testid="email-field">{ ` ${email}` }</span>
          </div>
          <div className="total-expenses">
            Despesas Totais:
            <span data-testid="header-currency-field">{ ` ${'BRL'}` }</span>
            <span data-testid="total-field">
              { expenses.length > 0 ? this.updateTotal(expenses) : 0 }
            </span>
          </div>
          <div />
        </div>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
