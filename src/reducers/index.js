import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const combinedReducer = combineReducers({
  user,
  wallet,
});

export default combinedReducer;
