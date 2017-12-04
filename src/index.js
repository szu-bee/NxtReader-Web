import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import './styles/css/styles/index.css'
import readerApp from './reducers/index'
import App from './App'

import 'whatwg-fetch'

import registerServiceWorker from './registerServiceWorker'

let store = createStore(readerApp)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root'))

registerServiceWorker()
