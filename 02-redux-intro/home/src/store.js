import { createStore } from 'redux';
import userReducer from './users.reducer';


//store
const store = createStore(userReducer);

export default store;
