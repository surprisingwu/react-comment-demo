import React, { Component } from 'react';
import GlobalStyle from './style.js';
import IconFont from './static/iconfont/iconfont';
import Header from './common/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <IconFont />
        <Header />
      </div>
    );
  }
}

export default App;
