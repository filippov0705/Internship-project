import React, { Component } from 'react';
import { connect } from 'react-redux';
import Schedule from '../../../common/Schedule';

class ProcedureSchedule extends Component {

  render() {
    const proceduresList = this.props.procedures.proceduresList;
    const targetProcedure = proceduresList.find(item => item.id === this.props.user);


    return <Schedule id={this.props.id} />
    }
}

const mapStateToProps = store => {
  return {
      procedures: store.procedures
  }
}

export default connect(mapStateToProps)(ProcedureSchedule);