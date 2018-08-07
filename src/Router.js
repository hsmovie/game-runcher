import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routes/Home'
import Test from './routes/Test'
import Header from './layout/Header'
import Announcement from './layout/Announcement'
import Chatting from './layout/Chatting'
import Bag from './layout/Bag'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="routes-wrapper">
          <Header />
          <Announcement />
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Chatting />
          <Bag />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
