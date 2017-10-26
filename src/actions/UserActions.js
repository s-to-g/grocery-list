// import firebase from '../firebase';
//
// const usersRef = firebase.database().ref('/users');

import {getStoredUsers} from '../util.js';

export function AddUserAction(userName, firstUser) {
  return function(dispatch, getState) {
    const {users} = getState();
    console.log(users);
    const newUser = {
      name: userName,
      id: Date.now(),
      loggedIn: firstUser
    }
    const newUsers = [...users, newUser];

    localStorage.setItem('gl_users', JSON.stringify(newUsers));

    dispatch({
      type: "ADD_USER", payload: newUser
    })
  }
}

export function RemoveUserAction(userId) {
  return function(dispatch) {
    const storedUsers = getStoredUsers();
    const newUsers = storedUsers.filter((user) => user.id !== userId);

    localStorage.setItem('gl_users', JSON.stringify(newUsers));

    dispatch({
      type: "REMOVE_USER", payload: userId
    })
  }
}

export function ChangeUserAction(userId) {
  return function(dispatch) {
    dispatch({
      type: "CHANGE_USER", payload: userId
    })
  }
}
