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

//3. настройка коннектора
const mapState = state => {
  return {
    counter: state,  //передаем наверх с помощью коннектора
  };
};

//3. настройка
const mapDispatch = {
  increment: counterActions.increment, //*вызываем action creator
  decrement: counterActions.decrement, //* попадает вверх как пропс
  reset: counterActions.reset,
};

//1. коннектор
const connector = connect(mapState, mapDispatch); //HOC

//2.
export default connector(Counter); //ф-я принимает комп, добавляет ф-л, возврвщает компю



//отправляем action значения в store -они там изменяют state
//когда state в store обновляются, то с помощью connect компоненты уведомляюься (новый стейти приходит в компоненту)
//в компоненты попадают новые проперти и перерисовывается компонента (отрендериваем новый стейт)