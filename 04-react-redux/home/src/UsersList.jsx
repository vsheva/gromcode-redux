import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './users/users.actions';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

const UsersList = ({ usersList, currentPage, goPrev, goNext }) => {
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const userToRender = usersList.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        goPrev={goPrev}
        goNext={goNext}
        itemsPerPage={itemsPerPage}
        totalItems={usersList.length}
      />
      <ul className="users">
        {userToRender.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    usersList: state.usersList,
    currentPage: state.currentPage,
  };
};

const mapDispatchToProps = {
  goPrev: counterActions.goPrev, //отправляем в UI
  goNext: counterActions.goNext, //доступ к action, к-ым буду создавать пользователя
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UsersList);



/*import React from 'react';
import {connect} from 'react-redux';
import  * as counterActions from './users/users.actions';
import Pagination from './Pagination.jsx';
import User from './User.jsx';


const UsersList=({users, goPrev, goNext})=> {
    console.log("users in UserList", users)
    console.log("currentPage", users.currentPage)
    const itemsPerPage = 3;
    const startIndex = (users.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const userToRender = users.usersList.slice(startIndex, endIndex);

    return (
        <div>
            <Pagination
                currentPage={users.currentPage}
                goPrev={goPrev}
                goNext={goNext}
                itemsPerPage={itemsPerPage}
                totalItems={users.usersList.length}
            />
            <ul className="users">
                {userToRender.map(user => (
                    <User key={user.id} name={user.name} age={user.age}/>
                ))}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) =>  {
    console.log("state",state)
    return {
        users: {
            usersList: state.usersList,
            currentPage: state.currentPage,
        }

    };
};

const mapDispatchToProps = {
    goPrev:counterActions.goPrev,  //отправляем в UI
    goNext: counterActions.goNext,   //достук к action, к-ым буду создавать пользователя
};


const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UsersList);*/

//1. Create project
//2. make static layout
//3. divide into components
//4. static react layout version
//5. declare state (what, where) and props
//6. write logic

// как работать с ошибками
// ~ понять точку входа кода -> цепочку вызова
// ~ дебажить каждый шаг цепочки
// ~ локализовать проблему
// ~  FIX
