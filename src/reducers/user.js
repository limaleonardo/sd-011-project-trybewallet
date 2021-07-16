// Esse reducer será responsável por tratar as informações da pessoa usuária
import { VALIDATE_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case VALIDATE_LOGIN:
    return {
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
