import { createStore } from 'redux';
import userReducer from './users.reducer';

//users
const store = createStore(userReducer);

export default store;
