import React, { Component } from "react";
import Task from "../task/Tasks";
import { connect } from "react-redux";
import ProcedurePage from "./ProcedurePage";
import Heading from "../../../common/Heading";

class InfoProcedure extends Component {
  render() {
    const targetProcedure = this.props.procedures.proceduresList.find(
      item => item.id === this.props.match.params.id
    );
    const data = targetProcedure ? targetProcedure.tasks : [];

    return (
      <ProcedurePage>
        <Heading size={"big"} heading={"Procedure taksk"} />
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
