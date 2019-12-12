import React, { Component } from 'react';
import Task from '../task/Tasks';
import { connect } from 'react-redux';

class ProcedureInfo extends Component {

  render() {
    const proceduresList = this.props.procedures.proceduresList;
    const targetProcedure = proceduresList.find(item => item.id === this.props.user)
    const data = targetProcedure ? targetProcedure.tasks : [];

    return <Task data={data} content={'ShowProcedureTasks'} />
    }
}

const mapStateToProps = store => {
  return {
      procedures: store.procedures
  }
}

export default connect(mapStateToProps)(ProcedureInfo);