import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import LoginForm from './Login'
import RegistrationForm from './Registration'
import { Link } from 'react-router-dom'

class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }
  
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible } = this.state
    
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
          <Link to="/main">
            <Button>
              Try a minute
            </Button>
          </Link>
          <div className="sign-in">
            <Button type="primary" onClick={ this.showModal }>
              Sign in  
            </Button>
            <Modal title="Sign in"
              visible={ visible }
              onCancel={ this.handleCancel }
              footer={ null }>
              <LoginForm />
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

class MiddleBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }
  
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible } = this.state

    return (
      <div id="middle-block">
        <h3>
          The content reader for power users who want to save time.
        </h3>
        <div className="deep-bg">
          <div>
            Discover how you can get the most value out of your reading!
          </div>
          <button onClick={ this.showModal }>
            Create a free account
          </button>
          <Modal title="Register"
            visible={ visible }
            onCancel={ this.handleCancel }
            footer={ null }>
            <RegistrationForm />
          </Modal>
        </div>
      </div>
    )
  }
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

class Intro extends Component {
  render() {
    return (
      <div id="Intro">
        <main>
          <TopBar />
          <MiddleBlock />
        </main>
        <Footer />
      </div>
    )
  }
}

export default Intro