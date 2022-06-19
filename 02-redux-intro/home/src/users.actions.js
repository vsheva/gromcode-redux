const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';

export const addUser = newUserData => {
  return {
    type: ADD,
     name: newUserData.name,
     id: newUserData.id,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE,
    id,
  };
};
