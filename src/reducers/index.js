import { combineReducers } from 'redux';
import usersReducer from './users'; 
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
  users: usersReducer, 
  form: form
});

export default rootReducer;
