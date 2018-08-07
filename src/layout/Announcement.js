import React, { Component } from 'react'
import announcementIcon from '../static/header/announcement.png'

class Announcement extends Component {
  render() {
    return (
      <div className="accouncement-wrapper">
        <img src={announcementIcon} alt="" className="announcement-icon" />
      </div>
    )
  }
}

export default Announcement