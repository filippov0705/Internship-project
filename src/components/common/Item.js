import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { procedureInfoUrl } from '../../utils/BuildPaths';
import ItemButtons from './ItemButtons';
import { Link } from 'react-router-dom';

const styles = theme => ({
    grid: {
        display: 'flex',
        alignItems: 'center',
    },
    item_border: {
        borderBottom: '1px solid rgba(94, 92, 92, 0.225)'
    },
    gridSpan: {
        marginLeft: '10px',
        marginTop: '2px',
        marginBottom: '2px'
    },
    link: {
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center',
        pointerEvents: 'none',
        textDecoration: 'none',
        color: 'black'
    }
  })

const Item = props => {
    const { classes } = props;  

    function getItemName() {
        switch (props.info) {
            case 'Procedure':
                return (<Link to={procedureInfoUrl(props.id)} className={classes.link}>
                            <span className={classes.gridSpan}>{props.name}</span>
                        </Link>)

            default:
                return <span className={classes.gridSpan}>{props.name}</span>
        }
    }

    function getButtons() {
        switch (props.info) {
            case 'Procedure':
                return <ItemButtons flag={props.flag} info={props.info} id={props.id} />

            default:
                return null;
        }
    }

    return (
        <Grid container className={classes.item_border}>
            <Grid item xs={12} sm={8} md={9} className={classes.grid}>
                {getItemName()}
            </Grid>
            {getButtons()}
        </Grid>
    )
}

export default withStyles(styles)(Item);