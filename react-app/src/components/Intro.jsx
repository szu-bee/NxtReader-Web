import React from 'react'
import { connect } from 'react-redux'
import TopBarContainer from '../containers/TopBarContainer'
import { 
  showLoginModal, 
  closeLoginModal,
  // loginModalVisible
  showRegisModal,
  closeRegisModal
} from '../actions'
import MiddleBlock from '../components/middleBlock'

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
        <TopBarContainer/>
        <MiddleBlock 
          showModal={e => {
            dispatch(showRegisModal())
          }}
          handleCancel={e => {
            dispatch(closeRegisModal())
          }}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Intro