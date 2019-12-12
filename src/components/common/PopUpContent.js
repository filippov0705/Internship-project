import React, { Component } from 'react';
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
        return this.getContent()
    }
}

export default PopUpContent;