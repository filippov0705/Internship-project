import React, { Component } from 'react';
import fakeData from '../../../../mockData/fakeData.json';
import List from '../../../common/List';

class ProcedureInfo extends Component {

  getPageContent = () => {
    const pageContent = window.location.pathname.split('/')[3],
      id = window.location.pathname.split('/')[2],
      data = fakeData.filter(item => item.id === id)[0].tasks;
      console.log(data)

    switch (pageContent) {
      case 'more':
        return <List info={'Task'} data={data} />

      default:
        return null;
    }
  }

  render() {

        return (
          <main>
            {this.getPageContent()}
          </main>
        )
    }
}

 export default ProcedureInfo;