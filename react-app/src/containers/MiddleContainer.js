import { connect } from 'react-redux'
import {
  showRegisModal,
  closeRegisModal
} from '../actions'
import MiddleBlock from '../components/MiddleBlock'

const mapStateToProps = state => ({
  visible: state.showRM
})

const mapDispatchToProps = dispatch => ({
  showModal: () => {
    dispatch(showRegisModal())
  },
  handleCancel: () => {
    dispatch(closeRegisModal())
  }
})

const MiddleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MiddleBlock)

export default MiddleContainer 
