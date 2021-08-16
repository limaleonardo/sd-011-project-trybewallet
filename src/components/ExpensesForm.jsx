import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import currencyTypeFilter from '../helpers/currencyTypeFilter';
import { fetchCurrencieAndQuotation, saveExpense, updateTotal } from '../actions/index';

class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleCurrencySelect = this.handleCurrencySelect.bind(this);
    this.handleMethodSelect = this.handleMethodSelect.bind(this);
    this.handleTagSelect = this.handleTagSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
  }

  handleChangeText(event) {
    const keys = {
      Valor: 'value',
      Descrição: 'description',
    };
    const { target: { value, name } } = event;

    this.setState({
      [keys[name]]: value,
    });
  }

  handleCurrencySelect(event) {
    const { target: { value } } = event;

    this.setState({
      currency: value,
    });
  }

  handleMethodSelect(event) {
    const { target: { value } } = event;

    this.setState({
      method: value,
    });
  }

  handleTagSelect(event) {
    const { target: { value } } = event;

    this.setState({
      tag: value,
    });
  }

  updateTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, exp) => (
      acc + exp.value * exp.exchangeRates[exp.currency].ask), 0);
    return (parseFloat(total).toFixed(2));
  }

  async handleClick() {
    const {
      fetchApi,
      currentId,
      addExpense,
      currencies,
      dispatchUpdateTotal,
    } = this.props;
    const { id } = this.state;
    this.setState({ id: currentId });
    await fetchApi();
    const payload = { id, ...this.state, exchangeRates: currencies };
    addExpense(payload);
    dispatchUpdateTotal(this.updateTotal());
  }

  render() {
    const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { currencies } = this.props;
    const filteredCurrencies = currencyTypeFilter(currencies);
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form className="expensesForm">
        <TextInput label="Valor" handleChange={ this.handleChangeText } type="text" />
        <TextInput label="Descrição" handleChange={ this.handleChangeText } type="text" />

        <SelectInput
          label="Moeda"
          options={ filteredCurrencies }
          handleChange={ this.handleCurrencySelect }
        />

        <SelectInput
          label="Método de pagamento"
          options={ paymentOptions }
          handleChange={ this.handleMethodSelect }
        />

        <SelectInput
          label="Tag"
          options={ tags }
          handleChange={ this.handleTagSelect }
        />

        <button
          type="button"
          aria-roledescription="button"
          onClick={ this.handleClick }
          className="btn btn-primary"
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currentId: state.wallet.currentId,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurrencieAndQuotation()),
  addExpense: (payload) => dispatch(saveExpense(payload)),
  dispatchUpdateTotal: (payload) => dispatch(updateTotal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  fetchApi: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  currentId: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objects).isRequired,
  dispatchUpdateTotal: PropTypes.func.isRequired,
};
