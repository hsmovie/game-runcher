import React, { Component } from 'react'
import arrowBackIcon from '../static/arrow_back.png'
import { Link } from 'react-router-dom'

class RoutesHeader extends Component {
  render() {
    console.log(this.props)
    const { title } = this.props
    return (
      <div className="routes-header-wrapper">
        <Link to="/" className="arrow-back-icon-wrapper">
          <img src={arrowBackIcon} className="arrow-back-icon" alt=""/>
        </Link>
        <div className="title-wrapper">
          { title }
        </div>
        <div className="face-wrapper">
        </div>
      </div>
    )
  }
}

export default RoutesHeader