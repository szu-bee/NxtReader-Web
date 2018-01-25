import TopBar from '../components/topBar'
import {
  showLoginModal,
  closeLoginModal
} from '../actions'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
  visible: state.showLM || state.showRM
})

const mapDispatchToProps = (dispatch) => ({
  showModal: () => {
    dispatch(showLoginModal())
  },
  handleCancel: () => {
    dispatch(closeLoginModal())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)