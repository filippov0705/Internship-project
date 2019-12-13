import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
import Page from '../../../common/Page';
import ProcedureAdd from './ProcedureAdd';
import ProcedureInfo from './ProcedureInfo';
import ProcedureEdit from './ProcedureEdit';

class ProcedurePage extends Component {

  getUserInterface = data => {
    switch(data[data.length - 1]) {
      case 'add':
        return <ProcedureAdd />

      case 'more':
        return <ProcedureInfo user={data[data.length - 2]} />

      case 'edit':
        return <ProcedureEdit />

      default:
        return null;
    }
  }

  render() {
  const data = window.location.pathname.split('/').slice(2);
    console.log(this.props)

    return (
      <Page title={this.props.data}>
        {this.getUserInterface(data)}
      </Page>
    )
  }
}

 export default ProcedurePage;