import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import withStyles from '@material-ui/core/styles/withStyles';
import TransitionsModal from './PopUpWindow';
import Tooltip from '@material-ui/core/Tooltip';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import { Link } from 'react-router-dom';
import { procedureScheduleUrl, editProcedureUrl, procedureInfoUrl } from '../utils/BuildPaths';
import { Redirect } from "react-router-dom";


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
    },
    link: {
        cursole: 'none'
    }
  })

class ProcedureTask extends Component {
    state = {
        redirect: false
    }

    getProcedureContent = () => {
        const { classes } = this.props;  
        return (
            <Grid 
             item 
             xs={12} sm={3}
             className={classes.grid} 
             style={{justifyContent: 'space-around'}}>
                <Tooltip title="Schedule">
                    <Link to={procedureScheduleUrl('4879')} className={classes.link}>
                        <button className={classes.btn}>
                            <ScheduleRoundedIcon />
                        </button>
                    </Link>
                </Tooltip>
                <Tooltip title="Edit">
                    <Link to={editProcedureUrl('4879')} className={classes.link}>
                        <button className={classes.btn}>
                            <TransitionsModal data={'Edit'} />
                        </button>
                    </Link>
                </Tooltip>
                <Tooltip title="More">
                    <Link to={procedureInfoUrl('4879')} className={classes.link}>
                        <button className={classes.btn}>
                            <TransitionsModal data={'More'} />
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

    getTaskContent = () => {
        const { classes } = this.props;  
        return (
            <Grid 
             item 
             xs={12} sm={4} md={3}
             className={classes.grid} 
             style={{justifyContent: 'space-around'}}>
                {/* <TransitionsModal data={'Schedule'} />
                <TransitionsModal data={'Edit'} />
                <TransitionsModal data={'More'} />
                <PlayCircleFilledWhiteRoundedIcon /> */}
                
            </Grid>
        )
    }

    redirect = () => {
        this.setState({
            redirect: true
        });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect push to={procedureInfoUrl('4879')} />
          }
    }

    render() {
    const { classes } = this.props;  

    return (
        <Grid container 
        style={{
            width: '100%',
            borderBottom: '1px solid rgba(94, 92, 92, 0.225)',
        }}>
            <Grid item xs={12} sm={8} md={9} className={classes.grid} onClick={this.redirect}>
                {this.renderRedirect()}
                <span className={classes.gridSpan}>{this.props.data} 1</span>
            </Grid>
            {(this.props.data === 'Procedure') ? this.getProcedureContent() : this.getTaskContent()}

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
}

export default withStyles(styles)(ProcedureTask);