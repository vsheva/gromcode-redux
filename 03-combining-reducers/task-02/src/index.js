import { store, increment, decrement } from './counter';

store.subscribe(() => {
  console.log(store.getState());
});

//method users.dispatch(action function) -обновление состояния
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
