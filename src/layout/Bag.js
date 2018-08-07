import React, { Component } from 'react'
// import bagOnIcon from '../static/bag_on.png'
import bagOffIcon from '../static/bag_off.png'

class Bag extends Component {
  render() {
    return (
      <div className="bag-wrapper">
        <img src={bagOffIcon} alt="" className="bag-icon" />
      </div>
    )
  }
}

export default Bag
