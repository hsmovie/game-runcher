import React, { Component } from 'react'
import bagIcon from '../static/header/bag.png'
import watchIcon from '../static/header/watch.png'
import moneyIcon from '../static/header/money.png'
import settingIcon from '../static/header/setting.png'

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="bag-icon-wrapper">
          <img src={bagIcon} alt="" className="bag-icon" />
        </div>

        <div className="">
          <img src={watchIcon} alt="" className="watch-icon" />
        </div>

        <div className="">
          <img src={moneyIcon} alt="" className="money-icon" />
        </div>

        <div className="">
          <img src={settingIcon} alt="" className="setting-icon" />
        </div>

        <div className="sub-header-wrapper">
          Hello
        </div>
      </div>
    )
  }
}

export default Header
