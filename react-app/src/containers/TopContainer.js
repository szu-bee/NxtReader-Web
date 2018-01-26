import { connect } from 'react-redux'
import {
  showLoginModal,
  closeLoginModal
} from '../actions'
import TopBar from '../components/TopBar'

const mapStateToProps = state => ({
  visible: state.showLM
})

const mapDispatchToProps = dispatch => ({
  showModal: () => {
    dispatch(showLoginModal())
  },
  handleCancel: () => {
    dispatch(closeLoginModal())
  }
})

const TopContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)

export default TopContainer
