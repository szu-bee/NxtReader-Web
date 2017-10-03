import React, { Component } from 'react';
import '../styles/FeedBar.css';

import rssLogo from '../assets/rss.png';
import catPhoto from '../assets/cat-pet-animal-domestic-104827.jpeg';
import slothPhoto from '../assets/sloth.jpg';

function FeedList(props) {
  const feedMsgs = props.feedMsgs;

  const listItems = feedMsgs.map(feedMsg =>
    <li className="feed-list">
      <img src={slothPhoto} alt=""/>
      <span>{feedMsg.feedTitle}</span>
      <span className="article-count">{feedMsg.articleCount}</span>
    </li>
  );
  return (
    <ul className="feed-lists">{listItems}</ul>
  );
}

const feedMsgs = [
  {feedTitle: 'hhh', articleCount: 11},
  {feedTitle: 'dkgs', articleCount: 22},
  {feedTitle: 'skf', articleCount: 33}
]

class FeedBar extends Component {
  render() {
    return (
      <div className="feed-bar">
        <div className="logo-block">
          <img src={rssLogo} alt="rss-logo" />
          <div>RSS</div>
          <div className="date">Today, 1:43PM</div>
        </div>
        <div className="lists">
          <div className="unread">
            <img src={catPhoto} alt="unread" />
            <span>Unread</span>
            <span className="article-count">8888</span>
          </div>
          <FeedList feedMsgs={feedMsgs} />
        </div>
        <footer>
          <input className="subscribe" />
        </footer>
      </div>
    );
  }
}

export default FeedBar;
