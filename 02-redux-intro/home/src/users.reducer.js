// const ADD = 'USER/ADD';
// const DELETE = 'USER/DELETE';

import { ADD, DELETE } from './users.actions';

const initialState = { usersList: [] }

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat(action.newUser),
      };
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(item => {
            return  item.id !== action.id
        }),
      };
    default:
      return state;
  }
};

export default userReducer

// console.log('action.newUser:', action.newUser);
// console.log('action.id: ', action.id);
