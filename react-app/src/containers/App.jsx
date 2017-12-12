import React, { Component } from 'react'
import '../styles/css/App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Main from '../components/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/main' component={Main}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
