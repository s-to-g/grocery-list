import { combineReducers } from 'redux';
import users from './UsersReducer';
import groceries from './GroceriesReducer';


const reducer = combineReducers({
  users,
  groceries
})

export default reducer;
