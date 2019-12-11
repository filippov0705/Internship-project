import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    itemName: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '30px'
    }
  })

const TaskButtons = props => {
    const { classes } = props; 

    function getContent(spec) {
        switch (spec) {
            case 'more':
                return (
                    <Grid 
                     item 
                     xs={12} sm={4} md={3}
                     className={classes.itemName}>
                    </Grid>
                )
            case 'edit':
                return (
                    <Grid 
                    item 
                    xs={12} sm={4} md={3}
                    className={classes.itemName}>

                   </Grid>
                )

            default:
                return null;
        }
    }    
    return (
        getContent(props.spec)
    )
}

export default withStyles(styles)(TaskButtons);