import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users/users.actions';


class Users extends React.Component {

  //user.action ожидает данные, к-ые нужно отправить редюсеру, к-ые создаем здесь
  onUserCreate = () => {     //обработчик на кнопку
    const id = Math.round(Math.random() * 10000000);
    const newUser = {
      id,
      name: `User# ${id}`,
    };
    this.props.createUser(newUser); //создаем на основании ф-ии из mapDispatch
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

const mapState = (state) => {
  return {
    users: state.users.usersList, //обращаемся к стору
  };
};

const mapDispatch = {
  createUser: userActions.addUser,  //отправляем в UI
  deleteUser: userActions.deleteUser, //достук к action, к-ым буду создавать пользователя
};


const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
