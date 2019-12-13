import React from 'react'
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';

const styles = theme => ({
    gridDisplay: {
      display: 'flex'
    }
});

const Schedule = props => {
    const {classes} = props;

    return (
        <Grid className={classes.gridDisplay}>
            <DatePicker id={props.id} />
            <TimePicker />
        </Grid>
    )
}

export default withStyles(styles)(Schedule);