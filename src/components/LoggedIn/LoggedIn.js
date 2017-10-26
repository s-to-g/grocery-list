import React from 'react';
import {connect} from 'react-redux';
import './LoggedIn.css';

const LoggedIn = props => {
  const {users} = props;
  const output = users.length === 0 ? "No user has been created"
  : users.map(user => {
    if (user.loggedIn === true) {
      return `${user.name} is logged in`;
    } else {
      return null;
    }
  });

  return (
    <section className="LoggedIn">{output}</section>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(LoggedIn);
