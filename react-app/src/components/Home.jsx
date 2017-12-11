import React, { Component } from 'react'
import '../styles/css/Home.css'
import { Modal, Button } from 'antd'

import LoginForm from './Login'
import RegistrationForm from './Registration'

class TopBar extends Component {
  state = {
    visible: false,
    confirmLoading: false
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true
    })

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      })
    }, 1000)
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible, confirmLoading } = this.state
    
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
            <Button type="primary" onClick={ this.showModal }>
              Sign in  
            </Button>
            <Modal title="Sign in"
              visible={ visible }
              onOk={ this.handleOk }
              confirmLoading={ confirmLoading }
              onCancel={ this.handleCancel }>
              <LoginForm />
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

class MiddleBlock extends Component {
  state = {
    visible: false,
    confirmLoading: false
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true
    })

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      })
    }, 1000)
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible, confirmLoading } = this.state

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
            onOk={ this.handleOk }
            confirmLoading={ confirmLoading }
            onCancel={ this.handleCancel }>
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