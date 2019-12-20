import React, { Component } from "react";
import Task from "../task/Tasks";
import { connect } from "react-redux";
import ProcedurePage from "./ProcedurePage";
import Tabs from "../../../common/Tabs";
import Heading from "../../../common/Heading";
import {
  setTargetProcedure,
  getUserData
} from "../../../../action/ProceduresActions";

class InfoProcedure extends Component {
  componentDidMount() {
    if (this.props.procedures.proceduresList.length === 0) {
      this.props.getUserData();
    }
    this.props.setTargetProcedure(this.props.match.params.id);
  }

  render() {
    if (this.props.procedures.proceduresList.length === 0) return null;
    const data = this.props.procedures.targetProcedure[0]
      ? this.props.procedures.targetProcedure[0].tasks
      : [];
    return (
      <ProcedurePage>
        <Heading
          heading={this.props.procedures.targetProcedure[0].name}
          size={"big"}
          background={"pageLabel"}
        />
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

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => dispatch(getUserData()),
    setTargetProcedure: id => dispatch(setTargetProcedure(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoProcedure);
