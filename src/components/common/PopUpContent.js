import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Input from './Input';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from './Button';
import Form from './Form';

class PopUpContent extends Component {

    getContent = () => {
        switch (this.props.data) {
            case 'Add':
                return <Form handleClose={this.props.handleClose} />
        
            default: 
                return null
        }
    }

    render() {
        // return this.getContent()
    return this.getContent()
    }
}

export default PopUpContent;