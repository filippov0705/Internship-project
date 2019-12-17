import React, { Component } from "react";
import Task from "../task/Tasks";
import { connect } from "react-redux";
import ProcedurePage from "./ProcedurePage";
import Tabs from "../../../common/Tabs";

class InfoProcedure extends Component {
  render() {
    const targetProcedure = this.props.procedures.proceduresList.find(
      item => item.id === this.props.match.params.id
    );
    const data = targetProcedure ? targetProcedure.tasks : [];

    return (
      <ProcedurePage>
        <Tabs data={"info"} id={this.props.match.params.id} />
        <Task data={data} content={"data"} />
      </ProcedurePage>
    );
  }
}

const mapStateToProps = store => {
  return {
    procedures: store.procedures
  };
};

export default connect(mapStateToProps)(InfoProcedure);
