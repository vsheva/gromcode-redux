import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions'; //импорт всех экспортов из файла

const Counter = ({ counter, increment, decrement, reset }) => {
  //const [counter, setCounter] = useState(0);
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
  decrement: counterActions.decrement, //*вызываем action creator
  reset: counterActions.reset, //*вызываем action creator
};

const connector = connect(mapState, mapDispatch); //HOC

export default connector(Counter); //ф-я принимает комп, добавляет ф-л, возврвщает компю

//через class

// class Counter extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             counter:0};
//
//     }
//     //1 bind(this)
//     decrease(){
//         this.setState({counter: this.state.counter - 1});
//     }
//     //2 новый синтаксис
//     increase = () => {
//         this.setState({counter: this.state.counter + 1});
//     }
//     //3 контекст ()=> this.reset()
//     reset () {
//         this.setState({counter:0});
//     }
//
//
//     render() {
//         return (
//             <div className="counter">
//                 <button data-action="decrease" className="counter__button" onClick={this.decrease.bind(this)} >
//                     -
//                 </button>
//                 <span className="counter__value" onClick={()=>this.reset()}>
//                   {this.state.counter}
//               </span>
//                 <button data-action="increase" className="counter__button" onClick={this.increase}>
//                     +
//                 </button>
//             </div>
//         );
//     }
//
// }
//
