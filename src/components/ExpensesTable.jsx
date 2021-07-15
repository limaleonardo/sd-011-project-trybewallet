import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletRemoveExpense } from '../actions';

class ExpensesTable extends Component {
  constructor() {
    super();

    this.removeRow = this.removeRow.bind(this);
  }

  removeRow(id) {
    const { remove } = this.props;
    remove(id);
  }

  render() {
    const { wallet } = this.props;
    const { expenses } = wallet;

    const tableBody = expenses.map((expense) => {
      const { id, value, description, coin, method, tag, exchangeRates } = expense;
      const currentCoin = exchangeRates[coin];
      return (
        <tbody key={ id }>
          <tr>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ `${coin} ${value}` }</td>
            <td>{ currentCoin.name.replace(/\/.*/g, '') }</td>
            <td>{ `R$ ${parseFloat(currentCoin.ask).toFixed(2)}` }</td>
            <td>{ `R$ ${(currentCoin.ask * value).toFixed(2)}` }</td>
            <td>Real</td>
            <td>
              <button type="button" onClick={ () => this.removeRow(id) }>Remover</button>
            </td>
          </tr>
        </tbody>
      );
    });

    return (
      <table className="wallet__table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de Pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        { tableBody }
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  wallet: PropTypes.shape(PropTypes.array).isRequired,
  expenses: PropTypes.shape(PropTypes.array).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(walletRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
