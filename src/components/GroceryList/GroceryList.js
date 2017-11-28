import React from 'react';
import {connect} from 'react-redux';
import {AddGroceryAction} from '../../actions/GroceriesActions';
import Input from '../Input/Input';
import Btn from '../Btn/Btn';
import './GroceryList.css';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.addGrocery = this.addGrocery.bind(this);
  }

  updateInput(value) {
    this.setState({
      inputValue: value
    });
  }

  addGrocery(userId) {
    const {dispatch} = this.props;
    const {inputValue} = this.state;
    dispatch(AddGroceryAction(inputValue, userId));
    this.setState({
      inputValue: ""
    });
  }

  render() {
    const {users} = this.props;
    const {inputValue} = this.state;
    return (
      <section className="GroceryList">
      {
        users.length <= 0 ?
        <h3>There is no list to show, create a user</h3> :
        users.map((user) => {
         if (user.loggedIn) {
           return (
             <div key={user.id}>
               <form onSubmit={e => {e.preventDefault(); this.addGrocery(user.id)}}>
                 <h3>Add a new gocery item for {user.name}</h3>
                 <Input placeholder="Add new grocery" inputValue={inputValue} updateInput={this.updateInput} />
                 <Btn text="Add" />
               </form>
             </div>
           )
         } else {
          return null;
         }
        })
      }
      </section>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users,
    groceries: state.groceries
  }
}

export default connect(mapStateToProps)(GroceryList);
