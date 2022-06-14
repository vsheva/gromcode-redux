import React from 'react';
import { ThemeContext } from './themes-context.js';

class ThemedButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        style={{ backgroundColor: this.context.background, color: this.context.fontColor }}
        className="btn"
      ></button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
