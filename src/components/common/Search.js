import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: 'white',
    borderRadius: '5px',
  }
  });

class Search extends Component {
    render() {
        const { classes } = this.props;

        return (
            <TextField
             id="outlined-search"
             label="Filter"
             type="search"
             className={classes.textField}
             margin="normal"
             variant="outlined"/>
        );
    }
}

export default withStyles(styles)(Search);