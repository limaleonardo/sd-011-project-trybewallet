// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_QUOTE_API, ADD_EXPENSES, REQUEST_QUOTE_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.state,
          exchangeRates: state.currencies,
        },
      ],
      isFetching: false,
    };
  case RECEIVE_QUOTE_API:
    return {
      ...state,
      currencies: action.data,
      isFetching: false,
    };
  case REQUEST_QUOTE_API:
    return {
      ...state,
      isFetching: true,
    };
  default:
    return state;
  }
}

export default wallet;
