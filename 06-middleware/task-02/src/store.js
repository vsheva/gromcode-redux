import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import usersReducer from './users/users.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  users: usersReducer,
});

/*
const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
