import React, { Component } from "react";
import { connect } from "react-redux";
import Schedule from "../../../common/Schedule";
import ProcedurePage from "./ProcedurePage";
import Tabs from "../../../common/Tabs";
import Heading from "../../../common/Heading";
import { getUserData } from "../../../../action/ProceduresActions";

class ScheduleProcedure extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    if (this.props.procedures.proceduresList.length === 0) return null;
    const targetProcedure = this.props.procedures.proceduresList.find(
      item => item.id === this.props.match.params.id
    );

    return (
      <ProcedurePage>
        <Heading
          heading={targetProcedure.name}
          size={"big"}
          background={"pageLabel"}
        />
        <Tabs data={"schedule"} id={this.props.match.params.id} />
        <Schedule
          id={this.props.match.params.id}
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

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => dispatch(getUserData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleProcedure);
