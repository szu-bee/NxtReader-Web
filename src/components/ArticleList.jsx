import React, {Component} from 'react'
import '../styles/css/styles/ArticleList.css'
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css'

import slothPhoto from '../assets/sloth.jpg'

function ArticleList(props) {
  const articleMsgs = props.articleMsgs

  const listItems = articleMsgs.map(articleMsg => 
    <li className="article-list-item">
      <div>
        <img src={slothPhoto} alt=""/>
        <div className="writing">
          <span className="feed-name">{articleMsg.feedName}</span>
          <h5 className="article-title">{articleMsg.articleTitle}</h5>
          <p className="article-summary">{articleMsg.articleSummary}</p>
        </div>
      </div>
    </li>)

  return (
    <div className="article-list-content">
      <ul className="article-list">{listItems}</ul>
    </div>
  )
}

export default ArticleList