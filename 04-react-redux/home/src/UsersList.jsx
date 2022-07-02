
import React from 'react';
import {connect} from 'react-redux';
import {goPrev, goNext} from './users/users.actions';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

//state
//currentPage


const UsersList=({users,currentPage, goPrev, goNext})=> {
   const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;//*
    const endIndex = startIndex + itemsPerPage;
    const usersToRender = users.slice(startIndex, endIndex);


        return (
            <div>
                <Pagination
                    currentPage={currentPage}
                    goPrev={goPrev}
                    goNext={goNext}
                    itemsPerPage={itemsPerPage}
                    totalItems={users.length}
                />

                <ul className="users">
                    {usersToRender.map(user => (
                        <User key={user.id} name={user.name} age={user.age}/>
                    ))}
                </ul>
            </div>
    )
}


const mapStateToProps = (state) => {
    return {
            users: state.users.usersList, //обращаемся к стору
            currentPage: state.users.currentPage

        }

};

const mapDispatchToProps = {
    goPrev: ()=> dispatch(goPrev()),  //отправляем в UI
    goNext: ()=> dispatch(goNext()),   //достук к action, к-ым буду создавать пользователя
};



export default connect(mapStateToProps, mapDispatchToProps)(UsersList)



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
