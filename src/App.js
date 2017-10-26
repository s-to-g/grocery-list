import React, { Component } from 'react';
import Users from './components/Users/Users';
import AddUser from './components/AddUser/AddUser';
import LoggedIn from './components/LoggedIn/LoggedIn';
import GroceryList from './components/GroceryList/GroceryList';
import './scss/base.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <AddUser />
        <LoggedIn />
        <GroceryList />
        <Users />
      </main>
    );
  }
}

export default App;
