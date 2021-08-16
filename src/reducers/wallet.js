import * as actions from '../actions/actionTypes';
import INITIAL_STATE from '../initial-state/initialState';

export default function reducer(state = INITIAL_STATE.wallet, action) {
  switch (action.type) {
  case actions.FETCH_CURRENCY_QUOTATION:
    return {
      ...state,
      isLoading: true,
    };

  case actions.FETCH_CURRENCY_QUOTATION_SUCESS:
    return {
      ...state,
      currencies: action.payload.currencies,
      fetchSucess: true,
      isLoading: false,
    };

  case actions.FETCH_CURRENCY_QUOTATION_ERROR:
    return {
      ...state,
      fetchSucess: false,
      errorMessage: action.payload,
      isLoading: false,
    };

  case actions.SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      currentId: state.currentId + 1,
    };

  case actions.UPDATE_TOTAL:
    return {
      ...state,
      total: action.payload.total,
    };

  case actions.REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((value) => value !== action.payload.expense)],
    };

  default: {
    return state;
  }
  }
}
