import { connect } from 'react-redux'
import {
  ok,
  cancel
} from '../actions'
import Main from '../components/Main'

// const mapStateToProps = state => ({
//   state
// })

const mapDispatchToProps = dispatch => ({
  handleOk: () => {
    dispatch(ok())
  },
  handelCancel: () => {
    dispatch(cancel())
  }
})

const MainContainer = connect(
  // mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainContainer
