import React, { Component } from 'react';
import './styles/App.css';

import FeedBar from './components/FeedBar';
import SwitchOption from './components/SwitchOption';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SwitchOption />
        <div className="main-interface"></div>
        <FeedBar />
      </div>
    );
  }
}

export default App;
