import { createStore } from 'redux';

//actions
const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

//reducer

/*const initialState = {
  //value: 0,
  history: [],
};*/

const counterReducer = (state = { history: [] }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        //value: state.value + 1,
        history: state.history.concat('+1'),
      };
    case DECREMENT:
      return {
        ...state,
        //value: state.value - 1,
        history: state.history.concat(-1),
      };
    case RESET:
      return {
        ...state,
        //value: 0,
        history: [],
      };
    default:
      return state;
  }
};

//state

const store = createStore(counterReducer);

export default store;
