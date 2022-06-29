import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users/users.actions';

class Users extends React.Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 10000000);
    const newUser = {
      id,
      name: `User#${id}`,
    };
    this.props.createUser(newUser);
  };

  render() {
    const { users, deleteUser } = this.props;
    return (
      <div className="users">
        <button onClick={this.onUserCreate} className="users__create-btn">
          Create user
        </button>
        <ul className="users__list">
          {users.map(user => (
            <li key={user.id} className="users__list-item">
              {user.name}
              <button onClick={() => deleteUser(user.id)} className="users__delete-btn">
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    ); //button*
  }
}

const mapState = state => {
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser, //*
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
