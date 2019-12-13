import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../../../../action/ProceduresActions';
import List from '../../../common/List';

class Tasks extends Component {

  getContent = () => {
    switch (this.props.content) {
      case 'availableProcedures':
        return this.props.procedures.possibleTasks;

      case 'chosenProcedures':
        return this.props.procedures.chosenTasks;

      case 'ShowProcedureTasks':
      case 'availableSchedule':
        return this.props.data;

      default:
        return null;
    }
  }

  render() {
        return <List data={this.getContent() || []} content={this.props.content} />
    }
}

const mapStateToProps = store => {
  return {
      procedures: store.procedures
  }
}

 export default connect(mapStateToProps)(Tasks);