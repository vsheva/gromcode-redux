const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';

export const addUser = newUser => {
  return {
    type: ADD,
    newUser,
    //payload: newUser,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE,
    id,
    //payload: id,
  };
};
