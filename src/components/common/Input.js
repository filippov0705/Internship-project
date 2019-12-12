import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { newProcedureName } from '../../action/ProceduresActions';

const styles = theme => ({
    input: {
        marginTop: '10px',
        marginLeft: '20px'
    },
    label: {
        marginLeft: '20px'
    }
});

class Input extends Component {

    inputTextChange = event => {
        this.props.newProcedureName(event.target.value);
    }

    render() {
        const { classes } = this.props;

        return (
            <label>
                <span className={classes.label}>{this.props.label}</span>
                <input className={classes.input} onChange={this.inputTextChange} />
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