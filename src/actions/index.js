// action types
export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

// action creators
export const loginAction = (email, password) => ({
  type: USER_LOGIN,
  payload: { email, password },
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const receiveCurrencies = (payload) => ({
  type: RECEIVE_CURRENCIES,
  payload,
});

export function fetchApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(receiveCurrencies(data)))
      .catch((error) => console.log(error));
  };
}

export function addExpense(data) {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((result) => dispatch({
        type: ADD_EXPENSE,
        payload: { ...data, exchangeRates: result },
      }));
  };
}
