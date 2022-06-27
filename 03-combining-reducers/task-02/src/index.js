import {store, increment, decrement } from './counter';

store.subscribe(() => {console.log(store.getState());});

//method store.dispatch(action function) -обновление состояния
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());


