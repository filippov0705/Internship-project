import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    menu_colar: {
        color: 'red',
    }
});

class MenuPopupState extends Component {
    render() {
        const { classes } = this.props;

        return (
         <PopupState variant="popover" popupId="demo-popup-menu">
         {popupState => (
             <React.Fragment>
                   <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                      Menu
                 </Button>
                 <Menu color="primary" {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Your profile</MenuItem>
                 <MenuItem onClick={popupState.close}>Help</MenuItem>
                 <MenuItem onClick={popupState.close}>Sign out</MenuItem>
                </Menu>
             </React.Fragment>
         )}
        </PopupState>
        );
    }
}

export default withStyles(styles)(MenuPopupState);