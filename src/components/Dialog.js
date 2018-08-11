import React, { Component } from 'react'
import MaterialDialog from '@material-ui/core/Dialog'

class Dialog extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue)
  };

  render() {
    const {
      classes,
      onClose,
      ...other
    } = this.props

    return (
      <MaterialDialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <div className="dialog-wrapper">
        </div>
      </MaterialDialog>
    )
  }
}

export default Dialog
