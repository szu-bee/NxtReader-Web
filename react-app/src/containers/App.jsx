import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'

import Intro from '../components/Intro'
import Main from '../components/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Intro}></Route>
          <Route path='/main' component={Main}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
