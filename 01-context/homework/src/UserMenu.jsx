import React from 'react';
import {Context} from "./userData-context.js"

class UserMenu extends React.Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${this.context.name}`}</span>
        <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar" />
      </div>
    );
  }
}
UserMenu.contextType = Context;
export default UserMenu;

