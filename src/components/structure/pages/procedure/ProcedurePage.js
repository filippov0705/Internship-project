import React, { Component } from 'react';
import List from '../../../common/List';
import Page from '../../../common/Page';
import ProcedureAdd from './ProcedureAdd';

class ProcedurePage extends Component {

  getUserInterface = data => {
    switch(data[data.length - 1]) {
      case 'add':
        return <ProcedureAdd />

      default:
        return null;
    }
  }

  render() {
  const data = window.location.pathname.split('/').slice(2);

    return (
      <Page title={this.props.data}>
        {this.getUserInterface(data)}
      </Page>
    )
  }
}

 export default ProcedurePage;