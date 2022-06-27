import {ADD_USER, DELETE_USER, UPDATE_USER} from "./users.actions"
/*
начальное состояние - это обьект {userlist: [] }

algo:
---строчка 12 - вернуть старое состояние (деструктурированное) + указать интересующее нас свойство
---строчка 13, указать интересующее нас свойство  userList, которое равно
--- старому usersList + к которому добавляю данные из обьекта action - action.payload.userData
    используем немутирующий метод массивов concat()
    */

const usersReducer = (state = {userList: []}, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                userList: state.userList.concat(action.payload.userData)
            };

        /* algo
        -убрать пользователя из массива по его id
        -пройдусь по существующим пользователям и проверю, что
        у этого пользователя user.id (каждый) не равен тому id,
        которое пришло в action из payload
        -filter создаст новый список ( новое состояние с новым списком)*/
        case DELETE_USER:
            return {
                ...state,
                userList: state.userList.filter(user => user.id !== action.payload.userId)
            };

        //  algo: 1)создал обьект, 2)заполнил старыми данными 3)добавил изменения, которые пришли по action
        case UPDATE_USER:
            return {
                ...state,
                userList: state.userList.map(user => {
                        if (user.id !== action.payload.userId) {
                            return {...user, ...action.payload.userData};
                        }
                        return user;
                    })
            };


        default:
            return state;
    }
}

export default usersReducer;





// with payload

/*
import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
    usersList: [],
};

 const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER: {
            return {
                ...state,
                usersList: state.usersList.concat(payload.userData),
            };
        }
        case DELETE_USER: {
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== payload.userId),
            };
        }
        case UPDATE_USER: {
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === payload.userId) {
                        return { ...user, ...payload.userData };
                    }

                    return user;
                }),
            };
        }
        default:
            return state;
    }
};



export default usersReducer
*/







