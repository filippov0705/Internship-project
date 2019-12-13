import React, { Component } from 'react';
import Page from '../../../common/Page';


class ProcedurePage extends Component {

  render() {
    return (
      <Page title={this.props.data}>
        {this.props.children}
      </Page>
    )
  }
}

 export default ProcedurePage;