import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions'; //импорт всех экспортов из файла

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    counter: state,
  };
};

const mapDispatch = {
  increment: counterActions.increment, //*вызываем action creator
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const connector = connect(mapState, mapDispatch); //HOC

export default connector(Counter); //ф-я принимает комп, добавляет ф-л, возврвщает компю

