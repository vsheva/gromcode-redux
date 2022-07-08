import './index.scss';
import store, { increment, decrement, reset } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector("[data-action='increment']");
const resetBtn = document.querySelector("[data-action='reset']");
const decrementBtn = document.querySelector("[data-action='decrement']");


//users.dispatch(action)

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

//подписка на изменение state
//получить состояние

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, num) => acc + +num, 0);
  const historyString = state.history.join('');
  resultElem.textContent = state.history.length ? `${historyString} = ${currentValue}` : '';
});

/*
users.subscribe(() => {
  const state = users.getState();
  const currentValue = state.value;
  const historyString = state.history.join('');
  resultElem.textContent = `${historyString}=${currentValue}`;
});
*/

//console.log(users.getState().history) // ['+1', -1, '+1', '+1', -1]
