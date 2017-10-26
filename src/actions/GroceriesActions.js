import {getStoredGroceries} from '../util.js';

export function AddGroceryAction(name, userId) {
  return function(dispatch, getState) {
    const {groceries} = getState();
    const newItem = {
      name: name,
      userId: userId,
      id: Date.now(),
      status: "active"
    }
    const newItems = [...groceries, newItem];

    localStorage.setItem('gl_items', JSON.stringify(newItems));

    dispatch({
      type: "ADD_GROCERY", payload: newItem
    })
  }
}

export function RemoveGroceryAction(id) {
  return function(dispatch) {
    const storedItems = getStoredGroceries();
    const newItems = storedItems.filter((item) => item.id !== id);

    localStorage.setItem('gl_items', JSON.stringify(newItems));

    dispatch({
      type: "REMOVE_GROCERY", payload: id
    })
  }
}

export function MarkGroceryAsDoneAction(id) {
  return function(dispatch) {
    const items = getStoredGroceries();
    items.map(item => {
      if (item.id === id) {
        item.status = "done"
      }
    })
    localStorage.setItem('gl_items', JSON.stringify(items));
    dispatch({
      type: "MARK_GROCERY_AS_DONE", payload: id
    })
  }
}

export function MarkGroceryAsUnDoneAction(id) {
  return function(dispatch) {
    const items = getStoredGroceries();
    items.map(item => {
      if (item.id === id) {
        item.status = "active"
      }
    })
    localStorage.setItem('gl_items', JSON.stringify(items));
    dispatch({
      type: "MARK_GROCERY_AS_UNDONE", payload: id
    })
  }
}
