import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';

const styles = theme => ({
    btn: {
        backgroundColor: 'white',
        border: 'none',
    },
    link: {
        cursole: 'none'
    },
    icon: {
        marginTop: '5px'
    },
    submitBtn: {
        backgroundColor: 'greenyellow',
        width: '85px',
        height: '40px',
        border: '1px solid gray',
        borderRadius: '7px'
    }
  })


const Button = props => {
    const { classes } = props,
        btnIcons = {
        Schedule: <ScheduleRoundedIcon className={classes.icon} />,
        Edit: <EditRoundedIcon className={classes.icon} />,
        More: <MoreHorizRoundedIcon className={classes.icon} />,
        Run: <PlayCircleFilledWhiteRoundedIcon />
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
                <button className={classes.btn}>
                    {btnIcons[props.title]}
                </button>
            </Tooltip>
        )
    }

    function getSubmitButton() {
        return <button className={classes.submitBtn}>Submit</button>
    }
    
    function getButton() {
        switch (props.type) {
            case 'link':
                return getLinkButton();

            case 'action':
                return getActionButton();

            case 'submit':
                return getSubmitButton();

            default:
                return null;
        }
    }

    return (
        getButton()
    )
}


export default withStyles(styles)(Button);