import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
// import { BrowserRouter as Router } from 'react-router-dom'
// import store from './store'

import './styles/index.scss'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducer)

ReactDOM.render( <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>, 
    document.getElementById('root')
)

registerServiceWorker()