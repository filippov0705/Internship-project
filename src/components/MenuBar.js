import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';



class SimpleMenu extends Component {

constructor() {
    super();
    this.state = {
        anchorEl: null
    };
}
handleClick = event => {
    this.setState({
        anchorEl: event.currentTarget
    });
};

handleClose = () => {
    this.setState({
        anchorEl: null
    });
};

render() {
   const { anchorEl } = this.state;

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>Your profile</MenuItem>
        <MenuItem onClick={this.handleClose}>Help</MenuItem>
        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
}

export default SimpleMenu;