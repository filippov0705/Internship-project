import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import withStyles from '@material-ui/core/styles/withStyles';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});



class TransitionsModal extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    handleOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    getIcon = () => {
        switch (this.props.data) {
            case 'Schedule': 
                return <ScheduleRoundedIcon onClick={this.handleOpen} />

            case 'Edit':
                return <EditRoundedIcon onClick={this.handleOpen} />

            case 'More':
                return <MoreHorizRoundedIcon onClick={this.handleOpen} />

            case 'Play': 
                return <PlayCircleFilledWhiteRoundedIcon onClick={this.handleOpen} />
            default: 
                return null
        }
    }

    render() {
const { classes, data } = this.props,
    { open } = this.state;

  return (
    <div style={{marginTop: '5px'}}>
      {this.getIcon(data)}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
}

export default withStyles(styles)(TransitionsModal);