import store from './store';
import { addUser, deleteUser } from './users.actions.js';

store.subscribe(() => {
  store.getState();
});

store.dispatch(addUser({ id: 21, name: 'John' }));
store.dispatch(deleteUser(21));
store.dispatch(addUser({ id: 18, name: 'Lena' }));
