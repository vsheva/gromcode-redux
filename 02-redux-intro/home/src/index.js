import store from './store';
import { addUser, deleteUser } from './users.actions';

//subscribe(getState), dispatch(action)

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 21, name: 'John' }));
store.dispatch(deleteUser(21));
store.dispatch(addUser({ id: 15, name: 'Lena' }));
store.dispatch(addUser({ id: 10, name: 'Valerii' }));
