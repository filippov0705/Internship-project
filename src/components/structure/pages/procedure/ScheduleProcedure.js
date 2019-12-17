import React, { Component } from "react";
import { connect } from "react-redux";
import Schedule from "../../../common/Schedule";
import ProcedurePage from "./ProcedurePage";
import Tabs from "../../../common/Tabs";

class ScheduleProcedure extends Component {
  render() {
    const id = this.props.match.params.id;
    const proceduresList = this.props.procedures.proceduresList;
    const targetProcedure = proceduresList.find(item => item.id === id);

    return (
      <ProcedurePage>
        <Tabs data={"schedule"} id={id} />
        <Schedule
          id={id}
          targetProcedure={targetProcedure || { schedule: { periodicity: "" } }}
          location={this.props}
        />
      </ProcedurePage>
    );
  }
}

const mapStateToProps = store => {
  return {
    procedures: store.procedures
  };
};

export default connect(mapStateToProps)(ScheduleProcedure);
