import React from 'react'
import Grid from '@material-ui/core/Grid';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import withStyles from '@material-ui/core/styles/withStyles';
import TransitionsModal from './PopUpWindow';
import Tooltip from '@material-ui/core/Tooltip';


const styles = theme => ({
    grid: {
        display: 'flex',
        alignItems: 'center'
    },
    gridSpan: {
        marginLeft: '10px'
    },
    btn: {
        backgroundColor: 'white',
        border: 'none',
    }
  })

const ProcedureTask = props => {
    const { classes } = props;

    function getProcedureContent() {
        return (
            <Grid 
             item 
             xs={6} sm={3}
             className={classes.grid} 
             style={{justifyContent: 'space-around'}}>
                <Tooltip title="Schedule">
                    <button className={classes.btn}>
                        <TransitionsModal data={'Schedule'} />
                    </button>
                </Tooltip>
                <Tooltip title="Edit">
                    <button className={classes.btn}>
                        <TransitionsModal data={'Edit'} />
                    </button>
                </Tooltip>
                <Tooltip title="More">
                    <button className={classes.btn}>
                        <TransitionsModal data={'More'} />
                    </button>
                </Tooltip>
                <Tooltip title="Run">
                    <button className={classes.btn}>
                        <PlayCircleFilledWhiteRoundedIcon />
                    </button>
                </Tooltip>
            </Grid>
        )
    }

    function getTaskContent() {
        return (
            <Grid 
             item 
             xs={6} sm={3}
             className={classes.grid} 
             style={{justifyContent: 'space-around'}}>
                {/* <TransitionsModal data={'Schedule'} />
                <TransitionsModal data={'Edit'} />
                <TransitionsModal data={'More'} />
                <PlayCircleFilledWhiteRoundedIcon /> */}
                
            </Grid>
        )
    }

    return (
        <Grid container 
        style={{
            width: '100%',
            height: '40px',
            borderBottom: '1px solid rgba(94, 92, 92, 0.225)',
        }}>
            <Grid item xs={6} sm={9} className={classes.grid}>
                <span className={classes.gridSpan}>{props.data} 1</span>
            </Grid>
            {(props.data === 'Procedure') ? getProcedureContent() : getTaskContent()}

            {/* <Grid 
             item 
             xs={3} 
             className={classes.grid} 
             style={{justifyContent: 'space-around'}}>
                <TransitionsModal data={'Schedule'} />
                <TransitionsModal data={'Edit'} />
                <TransitionsModal data={'More'} />
                <PlayCircleFilledWhiteRoundedIcon />
            </Grid> */}
        </Grid>
)
                }

export default withStyles(styles)(ProcedureTask);