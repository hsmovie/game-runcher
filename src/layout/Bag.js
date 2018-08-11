import React, { Component } from 'react'
import bagOnIcon from '../static/bag_on.png'
import bagOffIcon from '../static/bag_off.png'
import menuMissionIcon from '../static/menu/menu_mission.png'
import menuItemIcon from '../static/menu/menu_item.png'
import menuAzit from '../static/menu/menu_azit.png'
import { Link } from 'react-router-dom'

class Bag extends Component {
  state = {
    isMenuVisible: false
  }

  clickBagButton = () => {
    this.setState((preState) => {
      return {isMenuVisible: !preState.isMenuVisible}
    })
  }

  renderMenu() {
    if (this.state.isMenuVisible) {
      return (
        <div className="menu-wrapper">
          <Link to="/">
            <img src={menuAzit} alt="" className="menu-icon" />
          </Link>
          <Link to="/">
            <img src={menuItemIcon} alt="" className="menu-icon" />
          </Link>
          <Link to="/mission">
            <img src={menuMissionIcon} alt="" className="menu-icon" />
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="bag-wrapper">
        {this.renderMenu()}
        <div onClick={this.clickBagButton} className="bag-button-wrapper">
          <img
            src={this.state.isMenuVisible ? bagOnIcon : bagOffIcon}
            alt=""
            className="bag-icon"
          />
        </div>
      </div>
    )
  }
}

export default Bag
