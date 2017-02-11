import { combineReducers } from 'redux';
import viewer from './viewer.reducer';
import auth from './auth.reducer';

export default combineReducers({
  viewer,
  auth
});