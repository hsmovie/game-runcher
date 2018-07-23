import React, { Component } from 'react'
import img from '../static/test.png'

export class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <img src={img} alt="" style={{ width: '100%', height: '100%' }} />
      </div>
    )
  }
}

export default Home
