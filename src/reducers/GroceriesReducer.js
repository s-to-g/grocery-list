import {getStoredGroceries} from '../util.js';

export default function groceries(state = getStoredGroceries(), action) {
  switch (action.type) {
    case "ADD_GROCERY":
      return state.concat(action.payload);
    case "REMOVE_GROCERY":
      return state.filter((item) => item.id !== action.payload);
    case "MARK_GROCERY_AS_DONE":
      state.map(item => {
        if (item.id === action.payload) {
          item.status = "done";
        }
      })
      return state.concat();
    case "MARK_GROCERY_AS_UNDONE":
      state.map(item => {
        if (item.id === action.payload) {
          item.status = "active";
        }
      })
      return state.concat();
    default: return state;
  }
}
