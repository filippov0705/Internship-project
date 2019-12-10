import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import { procedureScheduleUrl, editProcedureUrl, procedureInfoUrl } from '../utils/BuildPaths';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';

const styles = theme => ({
    itemName: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btn: {
        backgroundColor: 'white',
        border: 'none',
    },
    link: {
        cursole: 'none'
    },
    icon: {
        marginTop: '5px'
    }
  })

const GetProcedureContent = props => {
    const { classes } = props;  

    return (
        <Grid 
         item 
         xs={12} sm={3}
         className={classes.itemName}>
            <Tooltip title="Schedule">
                <Link to={procedureScheduleUrl('4879')} className={classes.link}>
                    <button className={classes.btn}>
                        <ScheduleRoundedIcon className={classes.icon} />
                    </button>
                </Link>
            </Tooltip>
            <Tooltip title="Edit">
                <Link to={editProcedureUrl('4879')} className={classes.link}>
                    <button className={classes.btn}>
                        <EditRoundedIcon className={classes.icon} />
                    </button>
                </Link>
            </Tooltip>
            <Tooltip title="More">
                <Link to={procedureInfoUrl('4879')} className={classes.link}>
                    <button className={classes.btn}>
                        <MoreHorizRoundedIcon className={classes.icon} />
                    </button>
                </Link>
            </Tooltip>
            <Tooltip title="Run">
                <button className={classes.btn}>
                    <PlayCircleFilledWhiteRoundedIcon />
                </button>
            </Tooltip>
        </Grid>
    )
}

export default withStyles(styles)(GetProcedureContent);