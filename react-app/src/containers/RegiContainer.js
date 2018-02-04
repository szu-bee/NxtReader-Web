import { connect } from 'react-redux'
import {
  closeRegisModal
} from '../actions'
import Regi from '../components/common/Registration'

const mapDispatchToProps = dispatch => ({
  handleCancel: () => {
    dispatch(closeRegisModal())
  }
})

const RegiContainer = connect(
  null,
  mapDispatchToProps
)(Regi)

export default RegiContainer
