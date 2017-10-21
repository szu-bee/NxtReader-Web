import React, { Component } from 'react';
import './styles/css/styles/App.css';

import FeedBar from './components/FeedBar';
import ArticleListBar from './components/ArticleListBar';
import ArticleBar from './components/ArticleBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedBar />
        <ArticleListBar />
        <ArticleBar />
      </div>
    );
  }
}

export default App;
