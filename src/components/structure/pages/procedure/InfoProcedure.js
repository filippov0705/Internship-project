import React, { Component } from 'react';
import Task from '../task/Tasks';
import { connect } from 'react-redux';
import { ProceduresPath } from '../../../../utils/BuildPaths';
import Button from '../../../common/Button'; 
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
        <Button type={'simple'} linkTo={ProceduresPath()} message={'Go back'} looks={'applyBtn'} />
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