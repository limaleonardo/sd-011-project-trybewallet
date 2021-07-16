import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses, fetchCurrencies } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  change({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  dispatchOnClick() {
    const { saveCurrencies, getAllExpenses } = this.props;
    this.setState((previusState) => ({
      id: previusState.id + 1,
    }));
    getAllExpenses(this.state);
    saveCurrencies();
  }

  renderLabelPayment() {
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select onChange={ (e) => this.change(e) } id="paymentMethod" name="method">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderLabelTag() {
    return (
      <label htmlFor="tag">
        Tag:
        <select onChange={ (e) => this.change(e) } id="tag" name="tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const saveCurrenciesKeys = Object.keys(currencies);
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            onChange={ (e) => this.change(e) }
            type="text"
            id="value"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            onChange={ (e) => this.change(e) }
            type="text"
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select onChange={ (e) => this.handleChange(e) } id="coin" name="currency">
            { saveCurrenciesKeys
              .filter((filter) => filter !== 'USDT')
              .map((currencie, index) => <option key={ index }>{ currencie }</option>) }
          </select>
        </label>
        { this.renderLabelPayment() }
        { this.renderLabelTag() }
        <button
          type="button"
          onClick={ () => this.dispatchOnClick() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrencies: () => dispatch(fetchCurrencies()),
  getAllExpenses: (state) => dispatch(addExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.defaultProps = {
  currencies: [],
};

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  saveCurrencies: PropTypes.func.isRequired,
  getAllExpenses: PropTypes.func.isRequired,
};
