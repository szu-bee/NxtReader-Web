import React, {Component} from 'react';
import FeedList from './FeedList';
import '../styles/css/styles/FeedBar.css';
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css';

import slothPhoto from '../assets/sloth.jpg';


const feedMsgs = [
  {
    feedName: 'hhh',
    articleCount: 11
  }, {
    feedName: 'dkgs',
    articleCount: 22
  }, {
    feedName: 'skf',
    articleCount: 333
  }, {
    feedName: 'dskjf',
    articleCount: 66
  }, {
    feedName: 'sfs',
    articleCount: 23
  }, {
    feedName: 'sfsdfs',
    articleCount: 33
  }, {
    feedName: 'allk',
    articleCount: 34
  }, {
    feedName: 'skf',
    articleCount: 33
  }, {
    feedName: 'dskjf',
    articleCount: 66
  }, {
    feedName: 'sfs',
    articleCount: 23
  }, {
    feedName: 'sfsdfs',
    articleCount: 33
  }, {
    feedName: 'allk',
    articleCount: 34
  }, {
    feedName: 'allk',
    articleCount: 34
  }, {
    feedName: 'skf',
    articleCount: 33
  }, {
    feedName: 'dskjf',
    articleCount: 66
  }, {
    feedName: 'sfs',
    articleCount: 23
  }, {
    feedName: 'sfsdfs',
    articleCount: 33
  }, {
    feedName: 'allk',
    articleCount: 34
  }
]

class FeedBar extends Component {
  render() {
    return (
      <div className="feed-bar">
        <div className="main">
          <div className="logo-block">
            <i className="fa fa-rss fa-3x"></i>
            <div>RSS</div>
            <div className="date">Today, 1:43PM</div>
          </div>
          <div className="lists">
            <div className="unread-list">
              <div>
                <img src={slothPhoto} alt="unread"/>
                <span>Unread</span>
              </div>
              <span className="article-count">8888</span>
            </div>
            <FeedList feedMsgs={feedMsgs}/>
          </div>
        </div>
        <footer>
          <i className="fa fa-refresh"></i>
          <i className="fa fa-plus"></i>
        </footer>
      </div>
    );
  }
}

export default FeedBar;
