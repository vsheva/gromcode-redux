import { createStore } from 'redux';

//1.action type
const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

//actions
 const increment = () => {
  return {
    type: INCREMENT,
  };
};

 const decrement = () => {
  return {
    type: DECREMENT,
  };
};

 //2. reducer(state, action) => new state ({})
//action.type - case INCREMENT => return STATE
 const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
 //3.store(reducer)

 const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 //method store.dispatch(action function) -обновление состояния
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

//method
console.log(store.getState());
