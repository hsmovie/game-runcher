import React, { Component } from 'react'
import Header from '../layout/Header'
import Map from '../layout/Map'

export class Home extends Component {
  componentWillMount() {
    this.myRef = React.createRef()
  }

  render() {
    return (
      <div className="home-wrapper">
        <Map />
      </div>
    )
  }
}

export default Home
