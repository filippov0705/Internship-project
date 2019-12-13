import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from '../../../common/DatePicker'
import TimePicker from '../../../common/TimePIcker'

class ProcedureSchedule extends Component {

  render() {
    const proceduresList = this.props.procedures.proceduresList;
    const targetProcedure = proceduresList.find(item => item.id === this.props.user);


    return (<>
        <DatePicker />
        <TimePicker />
        </>)
    }
}

const mapStateToProps = store => {
  return {
      procedures: store.procedures
  }
}

export default connect(mapStateToProps)(ProcedureSchedule);