import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
});

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
   const { classes } = this.props;
   
  return (
    <div>
      <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MenuIcon />
          </IconButton>
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

export default withStyles(styles)(SimpleMenu);