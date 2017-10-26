import {getStoredUsers} from '../util.js';

export default function users(state = getStoredUsers(), action) {
  switch (action.type) {
    case "ADD_USER":
      return state.concat(action.payload);
    case "REMOVE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "CHANGE_USER":
      state.map(user => {
        if (user.loggedIn === true) {
          user.loggedIn = false;
        } else if (user.id === action.payload) {
          user.loggedIn = true;
        }
      })
      return state.concat();
    default: return state;
  }
}
