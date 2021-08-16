import awesomeAPI from '../services/awesomeAPI';
import * as actions from './actionTypes';

export function actionSetUser(email) {
  return {
    type: actions.SET_USER,
    payload: {
      email,
    },

  };
}

export function actionFetchCurrencies() {
  return {
    type: actions.FETCH_CURRENCY_QUOTATION,
  };
}

export function actionFetchCurrenciesSucess(currencies) {
  return {
    type: actions.FETCH_CURRENCY_QUOTATION_SUCESS,
    payload: {
      currencies,
    },
  };
}

export function actionFetchCurrenciesError(errorMessage) {
  return {
    type: actions.FETCH_CURRENCY_QUOTATION_ERROR,
    payload: {
      errorMessage,
    },
  };
}

export function saveExpense(payload) {
  return {
    type: actions.SAVE_EXPENSE,
    payload,
  };
}

export function updateTotal(total) {
  return {
    type: actions.UPDATE_TOTAL,
    payload: {
      total,
    },
  };
}

export function removeExpense(expense) {
  return {
    type: actions.REMOVE_EXPENSE,
    payload: {
      expense,
    },
  };
}

export function fetchCurrencieAndQuotation() {
  return ((dispatch) => {
    dispatch(actionFetchCurrencies);
    return (
      awesomeAPI()
        .then(
          ((response) => dispatch(actionFetchCurrenciesSucess(response))),
          ((response) => dispatch(actionFetchCurrenciesError(response))),
        )
    );
  });
}
