import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './routes/Home'
import Mission from './routes/Mission'
import NoMatch from './routes/NoMatch'
import Header from './layout/Header'
import Announcement from './layout/Announcement'
import Chatting from './layout/Chatting'
import Bag from './layout/Bag'
import Dialog from './components/Dialog'


class Router extends Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = value => {
    this.setState({ open: false })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="routes-wrapper">
          <Header />
          <Announcement />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mission" component={Mission} />
            <Route component={NoMatch} />
          </Switch>
          <Chatting />
          <Bag />
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
