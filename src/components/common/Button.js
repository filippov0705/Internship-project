import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const styles = theme => ({
    btn: {
        backgroundColor: 'white',
        border: 'none',
    },
    Run: {
        backgroundColor: 'white',
        border: 'none',
    },
    Add: {
        backgroundColor: '#cfe8fc',
        border: 'none',
    },
    link: {
        cursole: 'none'
    },
    icon: {
        marginTop: '5px'
    },
    addBtn: {
        width: '85px',
        height: '40px',
        border: '1px solid gray',
        borderRadius: '7px',
        marginLeft: '80px',
        marginRight: '15px'
    },
    applyBtn: {
        width: '85px',
        height: '40px',
        border: '1px solid gray',
        borderRadius: '7px',
        marginLeft: '20px'
    }
  })


const Button = props => {
    const { classes } = props,
        btnIcons = {
        Schedule: <ScheduleRoundedIcon className={classes.icon} />,
        Edit: <EditRoundedIcon className={classes.icon} />,
        More: <MoreHorizRoundedIcon className={classes.icon} />,
        Run: <PlayCircleFilledWhiteRoundedIcon />,
        Add: <AddCircleOutlineIcon />
    };

    function getLinkButton() {
        return (
            <Tooltip title={props.title}>
                <Link to={props.linkTo} className={classes.link}>
                    <button className={classes.btn}>
                        {btnIcons[props.title]}
                    </button>
                </Link>
            </Tooltip>
        )
    }

    function getActionButton() {
        return (
            <Tooltip title={props.title}>
                <button className={classes[props.title]} onClick={props.btnAction} >
                    {btnIcons[props.title]}
                </button>
            </Tooltip>
        )
    }

    function getSimpleButton() {
        return (
            <Link to={props.linkTo} className={classes.link}>
                <button className={classes[props.looks]} onClick={props.btnAction}>{props.message}</button>
            </Link>)
    }
    
    function getButton() {
        switch (props.type) {
            case 'link':
                return getLinkButton();

            case 'action':
                return getActionButton();

            case 'simple':
                return getSimpleButton();

            default:
                return null;
        }
    }

    return (
        getButton()
    )
}


export default withStyles(styles)(Button);