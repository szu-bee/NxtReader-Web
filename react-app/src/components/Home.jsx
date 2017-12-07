import React, {Component} from 'react'
import '../styles/css/Home.css'

function TopBar() {
  return (
    <div id="top-bar">
      <div className="logo">
        <a href="/">NxtReader</a>
      </div>
      <div className="options">
        <div className="app-types">
          <a href="#"
            className="underlink_hover">
            iOS App
          </a>
          <a href="#"
            className="underlink_hover">
            Android App
          </a>
          <a href="#"
            className="underlink_hover">
            Desktop (Electron) App
          </a>
        </div>
        <div className="sign-in">
          <a href="javascript:void(0);" 
            className="login" 
            className="underlink_hover">
            Sign in
          </a>
        </div>
      </div>
    </div>
  )
}

function MiddleBlock() {
  return (
    <div id="middle-block">
      <h3>
        The content reader for power users who want to save time.
      </h3>
      <div className="deep-bg">
        <div>
          Discover how you can get the most value out of your reading!
        </div>
        <button>
          Create a free account
        </button>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div id="footer">
      <div>
        Contact with us: Open issues on { }
        <a href="https://github.com/NxtReader/NxtReader-Web" 
          className="underlink_hover">
          GitHub
        </a>.
      </div>
    </div>
  )
}

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <main>
          <TopBar />
          <MiddleBlock />
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home