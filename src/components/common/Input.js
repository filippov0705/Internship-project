import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { newProcedureName } from '../../action/ProceduresActions';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    input: {
        marginLeft: '10px',
        height: '30px',
        borderRadius: '5px',
        [theme.breakpoints.up('xs')]: {
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            width: '300px'
        },
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column',
            alignItems: 'start',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        },
    },
    labelSpan: {
        marginLeft: '20px'
    }
});

class Input extends Component {

    componentDidMount() {
        this.props.newProcedureName('');
    }

    inputTextChange = event => {
        if (event.target.value.length > 25) {
            return event.target.value = event.target.value.substr(0, 25);
        }
        this.props.newProcedureName(event.target.value);
    }

    render() {
        const { classes } = this.props;

        return (
            <label className={classes.label}>
                <span className={classes.labelSpan}>{this.props.label}</span>
                <Tooltip title={'no more than 25 characters'}>
                    <input className={classes.input} onChange={this.inputTextChange} />
                </Tooltip>
            </label>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newProcedureName: name => dispatch(newProcedureName(name))
    }
  }

export default withStyles(styles)(connect(null, mapDispatchToProps)(Input));