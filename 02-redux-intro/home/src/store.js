import { createStore } from 'redux';
import userReducer from './users.reducer';

//weather
const store = createStore(userReducer);

export default store;
