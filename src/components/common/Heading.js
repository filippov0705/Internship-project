import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    big: {
        margin: '0 auto',
        marginTop: '10px',
        [theme.breakpoints.up('xs')]: {
            fontSize: '1.5em',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '2em'
        },
    },
    middle: {
        margin: '0 auto',
        marginTop: '10px',
        [theme.breakpoints.up('xs')]: {
            fontSize: '0.8em',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.3em'
        },
    }
});

const Heading = props => {
    const { classes } = props;

    return (
        <Grid container>
            <h3 className={classes[props.size]}>{props.heading}</h3>
        </Grid>
    )
}

export default withStyles(styles)(Heading);