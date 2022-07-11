import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users/users.actions';


class Users extends React.Component {

  //user.action ожидает данные, к-ые нужно отправить редюсеру, к-ые создаем здесь
  onUserCreate = () => {     //обработчик на кнопку
    const id = Math.round(Math.random() * 10000000);
    const newUser = {
      id,
      name: `User # ${id}`,
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
    users: state.users.usersList, //обращаемся к стору(берем weather,
    // так как здесь weather: usersReducer)->userReducer()->смотрим initial state у нас usersList: []
  };
};

const mapDispatch = {
  createUser: userActions.addUser,    //из импорта приходит userActions, отправляем наверх на перерендер UI
  deleteUser: userActions.deleteUser, //так как хочу получить доступ к action, к-ым буду создавать пользователя
};


const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users); //HOC - создаем новый компонент на основе старовго

export default ConnectedUsers;


// задипатчил action ->redux weather обновился, создался новый на основании
//старого и action -> ф-я коннектор отреагировала -в mapState получаем новый
//state -> из него достал массив пользователей ->передал в свойстве weather
//в свою компоненту, чтобы компонента его отрендерила


//deleteButton
//свойство deleteUser, которое при вызове будет диспатчить в стор action.deleteUser
//прокидывем deleteUser через пропсы в компонту
//эта ф-я вызывается при клике на кнопку

//action.deleteUser принимает id пользователя, которого нужно удалить
// соответственно его пердаем в эту ф-ю onClick={() => deleteUser(user.id)} //оборачиваем вызов этой ф-ии в callback, чтобы вызывалась по клику, а не сразк
// при нажатии на которую бедет диспатчиться action.deleteUser с правильным идентификатором
