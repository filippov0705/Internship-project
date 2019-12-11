import React, { Component } from 'react';
import fakeData from '../../../../mockData/fakeData.json';
import List from '../../../common/List';
import Page from '../../../common/Page'
import Tasks from '../task/Tasks'

class ProcedurePage extends Component {

  render() {

        return (
          <Page title="">
            Procedure name input
            <Tasks />
          </Page>
        )
    }
}

 export default ProcedurePage;