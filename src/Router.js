import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routes/Home'
import Test from './routes/Test'
import Header from './layout/Header'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="routes-wrapper">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
