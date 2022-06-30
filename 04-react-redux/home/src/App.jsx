import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './UsersList.jsx';

const users = [
    { id: 11, name: 'Tom', age: 20 },
    { id: 22, name: 'Bob', age: 100 },
    { id: 3353, name: 'Rob', age: 32 },
    { id: 353, name: 'Rim', age: 45 },
    { id: 334353, name: 'Skin', age: 27 },
    { id: 33512, name: 'Bobby', age: 26 },
    { id: 3653353, name: 'Jack', age: 19 },
    { id: 3, name: 'Bom', age: 21 },
    { id: 67875, name: 'DOM', age: 22 },
    { id: 6856, name: 'Toretto', age: 60 },
];

const App = () => {
  return (
    <Provider store={store}>
        <UsersList users={users} />
    </Provider>
  );
};

export default App;
