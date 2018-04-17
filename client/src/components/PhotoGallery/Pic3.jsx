import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

class AlertDialog extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    open: false,
  }
  this.handleClickOpen=this.handleClickOpen.bind(this)
  this.handleClose= this.handleClose.bind(this)
}

  handleClickOpen(e) {
    this.setState({ open: true });
  };

  handleClose(e) {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}><img height="200" width="400" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnar4up7e2-WCs6uto0nrmkqz-VCPNSyiRRIeD2_du5gkdA6XF" /></Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Monumento de la Revolucion"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnar4up7e2-WCs6uto0nrmkqz-VCPNSyiRRIeD2_du5gkdA6XF"
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              <img height ='40' width ='40'src='https://www.freeiconspng.com/uploads/close-icon-29.png' />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
