import React from 'react';
import Header from './Header.jsx';
import {userData, Context} from "./userData-context.js"


class App extends React.Component {
  state = {
    userData,
  };


  render() {
    return (
        <div className="page">
         <Context.Provider value={this.state.userData}>
          <Header />
         </Context.Provider>
        </div>
    );
  }
}

export default App;
