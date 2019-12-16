import React, { Component } from 'react';
import Task from '../task/Tasks';
import { connect } from 'react-redux';
import ProcedurePage from './ProcedurePage';

class InfoProcedure extends Component {

  render() {
    const proceduresList = this.props.procedures.proceduresList;
    const id = this.props.match.params.id;
    const targetProcedure = proceduresList.find(item => item.id === id);
    const data = targetProcedure ? targetProcedure.tasks : [];

    return (
      <ProcedurePage>
        <Task data={data} content={'data'} />
      </ProcedurePage>
    )
  }
}

const mapStateToProps = store => {
  return {
      procedures: store.procedures
  }
}

export default connect(mapStateToProps)(InfoProcedure);