import React from 'react';
import {connect} from 'react-redux';
import Btn from '../Btn/Btn';
import {RemoveGroceryAction, MarkGroceryAsDoneAction, MarkGroceryAsUnDoneAction} from '../../actions/GroceriesActions';
import {RemoveUserAction, ChangeUserAction} from '../../actions/UserActions';
import './Users.css';

class Users extends React.Component {
  deleteUser(userId) {
    const {dispatch} = this.props;
    dispatch(RemoveUserAction(userId));
  }

  changeUser(userId) {
    console.log(userId);
    const {dispatch} = this.props;
    dispatch(ChangeUserAction(userId));
  }

  removeGrocery(id) {
    const {dispatch} = this.props;
    dispatch(RemoveGroceryAction(id));
  }

  markGroceryAsDone(id) {
    const {dispatch} = this.props;
    dispatch(MarkGroceryAsDoneAction(id));
  }

  markGroceryAsUnDone(id) {
    const {dispatch} = this.props;
    dispatch(MarkGroceryAsUnDoneAction(id));
  }

  render() {
    const {users, groceries} = this.props;
    return(
      <section className="Users">
        <h3>Users</h3>
        <ul className="Users-list">
        {
          users.map((user, i) =>
            <li className="Users-item" key={user.id}>
              <span className="Users-name">{user.name}<span className="Users-count">{groceries.filter(item => item.userId === user.id && item.status === "active").length}</span></span>
              <div className="Users-actions">
              {
                !user.loggedIn ? <Btn text="Change" componentClass="Btn--outline" onClickAction={this.changeUser.bind(this, user.id)} /> : null
              }
                <Btn text="Delete" componentClass="Btn--outline" onClickAction={this.deleteUser.bind(this, user.id)} />
              </div>
              <ul className="Users-groceries">
              {
                groceries.map((item) => {
                  if (item.userId === user.id) {
                    let componentClasses = ['Users-groceriesItem'];
                    item.status === "done" && componentClasses.push('GroceryList-item--done');
                    return (
                      <li className={componentClasses.join(" ")} key={item.id}>
                        <span className="GroceryList-itemTitle">{item.name}</span>
                          <Btn text="Remove" onClickAction={this.removeGrocery.bind(this, item.id)} componentClass="Btn--outline" />
                          {
                            item.status === "active" ?
                            <Btn text="Done" onClickAction={this.markGroceryAsDone.bind(this, item.id)} componentClass="Btn--outline" /> :
                            <Btn text="Not done" onClickAction={this.markGroceryAsUnDone.bind(this, item.id)} componentClass="Btn--outline" />
                          }
                      </li>
                    )
                  } else {
                    return null;
                  }
                })
              }
              </ul>
            </li>
          )
        }
        </ul>
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

export default connect(mapStateToProps)(Users);
