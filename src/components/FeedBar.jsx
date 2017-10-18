import React, {Component} from 'react';
import '../styles/FeedBar.css';
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css';

import slothPhoto from '../assets/sloth.jpg';
import rssIcon from '../assets/RSS-icon.png';

function FeedList(props) {
  const feedMsgs = props.feedMsgs;

  const listItems = feedMsgs.map(feedMsg => <li className="feed-list">
    <div>
      <img src={rssIcon} alt=""/>
      <span>{feedMsg.feedTitle}</span>
    </div>
    <span className="article-count">{feedMsg.articleCount}</span>
  </li>);
  return (
    <div className="feed-lists-content">
      <ul className="feed-lists">{listItems}</ul>
    </div>
  );
}

const feedMsgs = [
  {
    feedTitle: 'hhh',
    articleCount: 11
  }, {
    feedTitle: 'dkgs',
    articleCount: 22
  }, {
    feedTitle: 'skf',
    articleCount: 33
  }, {
    feedTitle: 'dskjf',
    articleCount: 66
  }, {
    feedTitle: 'sfs',
    articleCount: 23
  }, {
    feedTitle: 'sfsdfs',
    articleCount: 33
  }, {
    feedTitle: 'allk',
    articleCount: 34
  }, {
    feedTitle: 'skf',
    articleCount: 33
  }, {
    feedTitle: 'dskjf',
    articleCount: 66
  }, {
    feedTitle: 'sfs',
    articleCount: 23
  }, {
    feedTitle: 'sfsdfs',
    articleCount: 33
  }, {
    feedTitle: 'allk',
    articleCount: 34
  }
]

class FeedBar extends Component {
  render() {
    return (
      <div className="feed-bar">
        <div className="logo-block">
          <i className="fa fa-rss fa-3x"></i>
          <div>RSS</div>
          <div className="date">Today, 1:43PM</div>
        </div>
        <div className="lists">
          <div className="unread">
            <div>
              <img src={slothPhoto} alt="unread"/>
              <span>Unread</span>
            </div>
            <span className="article-count">8888</span>
          </div>
          <FeedList feedMsgs={feedMsgs}/>
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
