import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../../../action/ProceduresActions';
import List from '../../../common/List';
import ListActions from '../../../common/ListActions';
import Page from '../../../common/Page';

class Procedures extends Component {

  // componentDidMount() {
  //   this.props.getUserData() //TODO add getting tasks from server
  // }


    render() {
      const proceduresList = this.props.procedures.proceduresList;

      return (
        <Page>
          <ListActions />
          <List info={'Procedure'} content={'list'} data={proceduresList} />
        </Page>
      )
  }
}

const mapStateToProps = store => {
    return {
        procedures: store.procedures
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getUserData: () => dispatch(getUserData()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Procedures);