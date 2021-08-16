import * as actions from '../actions/actionTypes';
import INITIAL_STATE from '../initial-state/initialState';

export default function reducer(state = INITIAL_STATE.user, action) {
  switch (action.type) {
  case actions.SET_USER:
    return {
      ...state,
      email: action.payload.email,
    };

  default: {
    return state;
  }
  }
}
