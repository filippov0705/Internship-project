import React, { Component } from "react";
import { connect } from "react-redux";
import Schedule from "../../../common/Schedule";
import ProcedurePage from "./ProcedurePage";
import Tabs from "../../../common/Tabs";
import Heading from "../../../common/Heading";
import { getUserData } from "../../../../action/ProceduresActions";

class ScheduleProcedure extends Component {
  componentDidMount() {
    const data = this.props.mockData.allProcedures.filter(
      item => item.id === this.props.match.params.id
    );
    this.props.getUserData(data);
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
    procedures: store.procedures,
    mockData: store.mockData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: data => dispatch(getUserData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleProcedure);
