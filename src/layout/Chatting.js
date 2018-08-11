import React, { Component } from 'react'
import chattingOnIcon from '../static/chatting_on.png'
import chattingOffIcon from '../static/chatting_off.png'

class Chatting extends Component {
  state = {
    isChattingBoxVisible: false
  }

  clickChattingButton = () => {
    this.setState((preState) => {
      return {isChattingBoxVisible: !preState.isChattingBoxVisible}
    })
  }

  renderChattingBox() {
    if (this.state.isChattingBoxVisible) {
      return <div className="chatting-box-wrapper"></div>
    }
  }

  render() {
    return (
      <div className="chatting-wrapper">
        {this.renderChattingBox()}
        <div onClick={this.clickChattingButton} className="chatting-button-wrapper">
          <img
            src={this.state.isChattingBoxVisible ? chattingOnIcon : chattingOffIcon}
            alt=""
            className="chatting-on-icon"
          />
        </div>
      </div>
    )
  }
}

export default Chatting
