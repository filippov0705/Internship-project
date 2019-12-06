import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';



class SimpleMenu extends Component {

constructor() {
    super();
    this.state = {
        anchorEl: false
    };
}
handleClick = event => {
    this.setState({
        anchorEl: event.currentTarget
    });
};

handleClose = () => {
    this.setState({
        anchorEl: false
    });
};

render() {
   const { anchorEl } = this.state;

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
}

export default SimpleMenu;