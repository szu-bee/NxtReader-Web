import React, { Component } from 'react';
import './styles/App.css';

import SwitchOption from './components/SwitchOption';
import FeedBar from './components/FeedBar';
import ArticleListBar from './components/ArticleListBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SwitchOption />
        <div className="main-interface">
          <FeedBar />
          <ArticleListBar />
        </div>
      </div>
    );
  }
}

export default App;
