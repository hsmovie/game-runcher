import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './routes/Home'
import Test from './routes/Test'

class Router extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
        </div>
      </Router>
    )
  }
}

export default Router
