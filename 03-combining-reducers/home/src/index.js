import store from './store';

import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());

store.dispatch(addProduct({ id: 1, name: 'Milk' }));
store.dispatch(addProduct({ id: 2, name: 'Cheese' }));
store.dispatch(removeProduct(2));

store.dispatch(setLanguage('en'));
