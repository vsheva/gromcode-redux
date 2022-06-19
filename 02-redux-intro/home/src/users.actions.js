export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const addUser = newUser => {
  return {
    type: ADD,
    name: newUser.name,
    id: newUser.id,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE,
    id,
  };
};
