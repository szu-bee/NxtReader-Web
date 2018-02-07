import { connect } from 'react-redux'
import {
  closeLoginModal
} from '../actions'
import Login from '../components/common/Login'

const mapDispatchToProps = dispatch => ({
  handleCancel: () => {
    dispatch(closeLoginModal())
  }
})

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Login)

export default LoginContainer
