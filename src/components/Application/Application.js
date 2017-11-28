import React, { Component } from 'react';
import Users from '../Users/Users';
import AddUser from '../AddUser/AddUser';
import LoggedIn from '../LoggedIn/LoggedIn';
import GroceryList from '../GroceryList/GroceryList';
import '../../scss/base.css';
import './Application.css';

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <AddUser />
        <LoggedIn />
        <GroceryList />
        <Users />
      </main>
    );
  }
}

export default Application;
