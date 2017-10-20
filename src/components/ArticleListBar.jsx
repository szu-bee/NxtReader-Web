import React, { Component } from 'react';
import SwitchOption from './SwitchOption';
import '../styles/ArticleListBar.css';
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css';

import slothPhoto from '../assets/sloth.jpg';

function ArticleList(props) {
  const articleMsgs = props.articleMsgs;
  console.log(articleMsgs);

  const listItems = articleMsgs.map(articleMsg => 
    <li className="article-list-item">
      <div className="date">{articleMsg.date}</div>
      <div>
        <img src={slothPhoto} alt=""/>
        <div className="writing">
          <span className="feed-name">{articleMsg.feedName}</span>
          <h5 className="article-title">{articleMsg.articleTitle}</h5>
          <p className="article-summary">{articleMsg.articleSummary}</p>
        </div>
      </div>
    </li>);

  return (
    <div className="article-list-content">
      <ul className="article-list">{listItems}</ul>
    </div>
  );
}

const articleMsgs = [
  {
    date: 'SUNDAY,24 SEPTEMNER 2017',
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'    
  }, {
    date: 'SUNDAY,24 SEPTEMNER 2017',
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'    
  }, {
    date: 'SUNDAY,24 SEPTEMNER 2017',
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'    
  }, {
    date: 'SUNDAY,24 SEPTEMNER 2017',
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'    
  }, {
    date: 'SUNDAY,24 SEPTEMNER 2017',
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'    
  }, {
    date: 'SUNDAY,24 SEPTEMNER 2017',
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'    
  }
]

class ArticleListBar extends Component {
  render() {
    return (
      <div className="article-list-bar">
        <SwitchOption />
        <ArticleList articleMsgs={articleMsgs} />
        <footer>
          <i className="fa fa-check-circle"></i>
          <span>11 items</span>
          <div>
            <i className="fa fa-search"></i>
            <i className="fa fa-chevron-left"></i>
          </div>
        </footer>
      </div>
    );
  }
}

export default ArticleListBar;
