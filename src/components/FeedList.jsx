import React, {Component} from 'react';
import '../styles/css/styles/FeedList.css';
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css';

import rssIcon from '../assets/rss-icon.png';

function showList(e) {
  const listBar = document.querySelector('.article-list-bar');
  listBar.style.display = 'block';
}

function FeedList(props) {
  const feedMsgs = props.feedMsgs;

  const listItems = feedMsgs.map(feedMsg => 
    <li className="feed-list-item" onClick={showList}>
      <div>
        <img src={rssIcon} alt="" />
        <span>{feedMsg.feedName}</span>
      </div>
      <span className="article-count">{feedMsg.articleCount}</span>
    </li>);

  return (
    <div className="feed-list-content">
      <ul className="feed-list">{listItems}</ul>
    </div>
  );
}

export default FeedList;
