import React, { Component } from 'react';
import fakeData from '../mockData/fakeData.json';
import List from '../components/List';

class ProcedureInfo extends Component {

  getPageContent = () => {
    const pageContent = window.location.pathname.split('/')[3],
      id = window.location.pathname.split('/')[2],
      data = fakeData.filter(item => item.id === id)[0];

    switch (pageContent) {
      case 'more':
        return <List data={'Task'} content={data.tasks} spec={'more'}/>

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