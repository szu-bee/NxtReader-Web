import { combineReducers } from 'redux'
import showLM from './showLoginModal'
import showRM from './showRegisModal'
import isConfirm from './isConfirm'

const rootReducers = combineReducers({
  showLM,
  showRM,
  isConfirm
})

export default rootReducers
