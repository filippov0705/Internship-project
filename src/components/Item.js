import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { procedureInfoUrl } from '../utils/BuildPaths';
import { Redirect } from "react-router-dom";
import GetProcedureContent from './ProcedureContent';
import TaskContent from './TaskContent';



const styles = theme => ({
    grid: {
        display: 'flex',
        alignItems: 'center',
    },
    item_border: {
        borderBottom: '1px solid rgba(94, 92, 92, 0.225)'
    },
    gridSpan: {
        marginLeft: '10px'
    }
  })

class Item extends Component {
    state = {
        redirect: false
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
        <Grid container className={classes.item_border}>
            <Grid item xs={12} sm={8} md={9} className={classes.grid} onClick={this.redirect}>
                {this.renderRedirect()}
                <span className={classes.gridSpan}>{this.props.name}</span>
            </Grid>
            {(this.props.data === 'Procedure') ? <GetProcedureContent id={this.props.id} /> : <TaskContent spec={this.props.spec}  /> }
        </Grid>
        )
    }
}

export default withStyles(styles)(Item);