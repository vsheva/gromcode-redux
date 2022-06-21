export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const addUser = newUser => {
  return {
    type: ADD,
    newUser,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE,
    id,
  };
};

//payload: newUser,
//payload: id,