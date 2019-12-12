import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({});

class Input extends Component {

    render() {
        return (
            <label>
                <span>{this.props.label}</span>
                <input/>
            </label>
        )
    }
}

export default withStyles(styles)(Input);