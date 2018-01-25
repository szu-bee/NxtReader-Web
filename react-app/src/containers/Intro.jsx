import React from 'react'
import { connect } from 'react-redux'
import { 
  showLoginModal, 
  closeLoginModal,
  // loginModalVisible
} from '../actions'

import TopBar from '../components/topBar'
// import MiddleBlock from '../components/middleBlock'

const Footer = () => (
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

let Intro = ({ dispatch }) => {
  return (
    <div id="Intro">
      <main>
        <TopBar
          showModal={e => {
            dispatch(showLoginModal())
          }}
          handleCancel={e => {
            dispatch(closeLoginModal())
          }}
          visible={false}
          // visible={dispatch(loginModalVisible)}
        />
        {/* <MiddleBlock 
          showModal={e => {
            dispatch(showRegisModal(true))
          }}
          handleCancel={e => {
            dispatch(closeRegisModal(false))
          }}
        /> */}
      </main>
      <Footer />
    </div>
  )
}
Intro = connect()(Intro)

export default Intro
