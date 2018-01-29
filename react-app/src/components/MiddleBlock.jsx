import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from 'antd'
import RegistrationForm from './common/Registration'

const MiddleBlock = ({ showModal, handleCancel, visible }) => (
  <div id="middle-block">
    <h3>The content reader for power users who want to save time.</h3>
    <div className="deep-bg">
      <div className="guide">Discover how you can get the most value out of your reading!</div>
      <button onClick={ showModal }>
        Create a free account
      </button>
      <Modal title="Register"
        visible={ visible }
        onCancel={ handleCancel }
        footer={ null }>
        <RegistrationForm />
      </Modal>
    </div>
  </div>
)

MiddleBlock.propTypes = {
  showModal: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
}

export default MiddleBlock
