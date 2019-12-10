import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    itemName: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
  })

const TaskContent = props => {
    const { classes } = props; 

    return (
        <Grid 
         item 
         xs={12} sm={4} md={3}
         className={classes.itemName} />
    )
}

export default withStyles(styles)(TaskContent);