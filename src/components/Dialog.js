import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'

class Dialog extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue)
  };

  render() {
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <div>
          hello
        </div>
      </Dialog>
    )
  }
}

export default Dialog
