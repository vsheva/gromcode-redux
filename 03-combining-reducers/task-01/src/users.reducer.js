//reducer - создает новый стейт на основании actions и prev state

import {ADD_USER, DELETE_USER, UPDATE_USER} from "./users.actions"


//начальное состояние - это обьект {userlist: [] }
//---строчка 12 - вернуть старое состояние (деструктурированное) + указать интересующее нас свойство (ИТОГ: ВЕРНУТЬ ОБЬЕКТ с НОВЫМ СОСТОЯНИЕМ)
//---строчка 13, указать интересующее нас свойство  userList, которое равно
//--- старому usersList + к которому добавляю данные из обьекта action - action.payload.userData
//     используем немутирующий метод массивов concat()

const usersReducer = (state = {userList: []}, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                userList: state.userList.concat(action.payload.userData)
            };

        //убрать пользователя из массива по его id
        //пройдусь по существующим пользователям и проверю, что
        //у этого пользователя user.id (каждый) не равен тому id,
        // которое пришло в action из payload

        //filter создаст новый список ( новое состояние с новым списком)
        case DELETE_USER:
            return {
                ...state,
                userList: state.userList.filter((user) =>
                    user.id !== action.payload.userId)
            };

        case UPDATE_USER:
            return {
                ...state,
                userList: state.userList.map((user) => {
                        if (user.id !== action.payload.userId) {
                            return { //создал обьект
                                ...user, //заполнил старыми данными
                                ...action.payload.userData, //добавил изменения, которые пришли по action
                            }
                        }
                        return user;
                    })
            };

        default:
            return state;
    }
}

export default usersReducer;
