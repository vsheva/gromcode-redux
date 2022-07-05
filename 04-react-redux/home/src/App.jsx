//1. Create project
//2. make static layout
//3. divide into components
//4. static react layout version
//5. declare state (what, where) and props
//6. write logic

// как работать с ошибками
// ~ понять точку входа кода -> цепочку вызова
// ~ дебажить каждый шаг цепочки
// ~ локализовать проблему
// ~  FIX

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './UsersList.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
