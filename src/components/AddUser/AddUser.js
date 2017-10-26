import React from 'react';
import {connect} from 'react-redux';
import {AddUserAction} from '../../actions/UserActions';
// import firebase from '../../firebase';
import Input from '../Input/Input';
import Btn from '../Btn/Btn';
import './AddUser.css';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInput: false,
      inputValue: ""
    }
    this.addUser = this.addUser.bind(this);
    this.updateInput = this.updateInput.bind(this);
    // this.showInputField = this.showInputField.bind(this);
  }

  updateInput(value) {
    this.setState({
      inputValue: value
    })
  }

  showInputField() {
    this.setState({
      showingInput: true
    });
  }

  addUser() {
    const {inputValue} = this.state;
    const {dispatch, users} = this.props;
    // const usersRef = firebase.database().ref('/users');
    if (users.length === 0) {
      dispatch(AddUserAction(inputValue, true));
    } else {
      dispatch(AddUserAction(inputValue, false));
    }
    // usersRef.push({
    //   inputValue
    // })
    // .then(() => {
    //
    // });
    this.setState({
      inputValue: "",
      showingInput: false
    });
  }

  render() {
    const {inputValue, showingInput} = this.state;
    return (
      <section className="AddUser">
        { showingInput ?
          <form onSubmit={(e) => {e.preventDefault(); this.addUser()}}>
            <Input placeholder={"New User"} inputValue={inputValue} updateInput={this.updateInput} />
            <Btn text={"Add"} />
          </form> :
          <Btn text="Add User" onClickAction={this.showInputField.bind(this)} />
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(AddUser);
