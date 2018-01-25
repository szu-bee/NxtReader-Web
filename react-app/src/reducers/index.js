import { combineReducers } from 'redux'
import showLM from './showLoginModal'
import showRM from './showRegisModal'

const rootReducers = combineReducers({
  showLM,
  showRM
})

export default rootReducers