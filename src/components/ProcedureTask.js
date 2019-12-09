import React from 'react'
import Grid from '@material-ui/core/Grid';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    grid: {
        display: 'flex',
        alignItems: 'center'
    },
    gridSpan: {
        marginLeft: '10px'
    }
  })

const ProcedureTask = props => {
    const { classes } = props;

    return (
        <Grid container 
        style={{
            width: '100%',
            height: '40px',
            borderBottom: '1px solid rgba(94, 92, 92, 0.225)',
        }}>
            <Grid item xs={9} className={classes.grid}>
                <span className={classes.gridSpan}>Procedure 1</span>
            </Grid>
            <Grid 
                item 
                xs={3} 
                className={classes.grid} 
                style={{justifyContent: 'space-around'}}>
                <ScheduleRoundedIcon />
                <EditRoundedIcon />
                <MoreHorizRoundedIcon />
                <PlayCircleFilledWhiteRoundedIcon />
            </Grid>
        </Grid>
)
                }

export default withStyles(styles)(ProcedureTask);