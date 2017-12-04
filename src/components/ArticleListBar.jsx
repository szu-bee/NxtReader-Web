import React, {Component} from 'react'
import SwitchOption from './SwitchOption'
import ArticleList from './ArticleList'
import '../styles/css/styles/ArticleListBar.css'
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css'


const articleMsgs = [
  {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }, {
    feedName: 'hhh',
    articleTitle: 'jhsbdibfafnskjdbfdskjbfjbsfdjeqw09n 0di9q0uda...',
    articleSummary: 'skldfhuafsjfnjkjsdf...'
  }
]

function hideList(e) {
  const listBar = document.querySelector('.article-list-bar')
  listBar.style.display = 'none'
}

// function AllIcons(props) {
//   return (
//     <footer>
//       <i className="fa fa-check-circle"></i>
//       <span>20 items</span>
//       <div>
//         <i className="fa fa-search"></i>
//         <i className="fa fa-chevron-left" onClick={hideList}></i>
//       </div>
//     </footer>
//   )
// }

// function SearchBar(props) {
//   return (
//     <footer> 
//       <input type="text"/>
//       <i className="fa fa-search"></i>
//     </footer>
//   )
// }

class Footer extends Component {
  constructor(props) {
    super(props)
    this.handleFooterChange = this.handleFooterChange.bind(this)
    this.state = {handleSearchOnly: false}
  }

  handleFooterChange() {
    this.setState({handleSearchOnly: true})
  }
  
  render() {
    // const handleSearchOnly = this.state.handleSearchOnly

    // let footerBar = null
    // if (!handleSearchOnly) {
    //   footerBar = <AllIcons onClick={this.handleFooterChange} />
    // } else {
    //   footerBar = <SearchBar />
    // }

    return (
      <footer>
        <i className="fa fa-check-circle"></i>
        <span>20 items</span>
        <div>
          <i className="fa fa-search"></i>
          <i className="fa fa-chevron-left" onClick={hideList}></i>
        </div>
      </footer>
    )
  }
}

class ArticleListBar extends Component {
  render() {
    return (
      <div className="article-list-bar">
        <SwitchOption/>
        <ArticleList articleMsgs={articleMsgs}/>
        <Footer/>
      </div>
    )
  }
}

export default ArticleListBar
