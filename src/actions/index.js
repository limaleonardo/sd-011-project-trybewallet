// Coloque aqui suas actions
export const REQUEST_QUOTE_API = 'REQUEST_QUOTE_API';
export const RECEIVE_QUOTE_API = 'RECEIVE_QUOTE_API';
export const VALIDATE_LOGIN = 'VALIDATE_LOGIN';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const validateLogin = (email) => ({
  type: VALIDATE_LOGIN,
  email,
});

export const addExpenses = (state) => ({
  type: ADD_EXPENSES,
  state,
});

export const receiveCurrencies = (currencie, expense) => ({
  type: SAVE_CURRENCIES,
  currencie,
  expense,
});

const receiveQuoteApi = (data) => ({
  type: RECEIVE_QUOTE_API,
  data,
});

const requestQuoteApi = () => ({
  type: REQUEST_QUOTE_API,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestQuoteApi());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(receiveQuoteApi(data));
  };
}
