import React, { Component } from 'react'
import chattingOnIcon from '../static/chatting_on.png'
import chattingOffIcon from '../static/chatting_off.png'

class Chatting extends Component {
  state = {
    isChattingBoxVisible: false
  }

  test = () => {
    this.setState((preState) => {
      return {isChattingBoxVisible: !preState.isChattingBoxVisible}
    })
    console.log(this.state.isChattingBoxVisible)
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
        <div onClick={this.test}>
          <img src={this.state.isChattingBoxVisible ? chattingOffIcon : chattingOnIcon} alt="" className="chatting-on-icon" />
        </div>
      </div>
    )
  }
}

export default Chatting