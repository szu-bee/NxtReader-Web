import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Modal, Button } from 'antd'
import LoginForm from './common/Login'

const TopBar = ({ showModal, handleCancel, visible }) => (
  <div id="top-bar">
    <div className="logo">NxtReader</div>
    <div className="options">
      <div className="app-types">
        <a href="http://localhost:3000/"
          className="underlink_hover">
          iOS App
        </a>
        <a href="http://localhost:3000/"
          className="underlink_hover">
          Android App
        </a>
        <a href="http://localhost:3000/"
          className="underlink_hover">
          Desktop (Electron) App
        </a>
      </div>
      <Link to="/main"><Button>Try a minute</Button></Link>
      <div className="sign-in">
        <Button type="primary" onClick={ showModal }>
          Sign in
        </Button>
        <Modal title="Sign in"
          visible={ visible }
          onCancel={ handleCancel }
          footer={ null }>
          <LoginForm />
        </Modal>
      </div>
    </div>
  </div>
)

TopBar.propTypes = {
  showModal: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired 
}

export default TopBar
