import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../../../action/ProceduresActions';
import List from '../../../common/List';
import ListActions from '../../../common/ListActions'

class Procedures extends Component {

  componentDidMount() {
    this.props.getUserData()
  }

    render() {
      const proceduresList = this.props.procedures.proceduresList;

      return (
        <React.Fragment>
          <ListActions />
          <List info={'Procedure'} data={proceduresList} />
        </React.Fragment>
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