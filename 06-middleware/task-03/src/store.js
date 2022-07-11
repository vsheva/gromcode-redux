import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import weatherReducer from './weather/weather.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  weather: weatherReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
