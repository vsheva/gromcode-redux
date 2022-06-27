//actions

export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';
export const UPDATE_USER = 'USERS/UPDATE_USER';

export const addUser = (userData)=>{
    return {
        type: ADD_USER,
        payload:{
            userData,
        }
    };
}

export const deleteUser = (userId)=>{
    return {
        type: DELETE_USER,
        payload:{
            userId,
        }
    };
}

//по id какого пользователя обновить, на какие данные обновить

export const updateUser = (userId, userData)=>{
    return {
        type: UPDATE_USER,
        payload:{
            userId,
            userData,
        }
    };
}