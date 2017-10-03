import React, { Component } from 'react';
import './styles/App.css';

import FeedBar from './components/FeedBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedBar />
      </div>
    );
  }
}

export default App;
