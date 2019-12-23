import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData } from "../../../../action/ProceduresActions";
import Page from "../../../common/Page";
import Tasks from "../task/Tasks";

class Procedures extends Component {
  componentDidMount() {
    if (this.props.procedures.proceduresList.length === 0) {
      this.props.getUserData();
    }
  }

  render() {
    const proceduresList = this.props.procedures.proceduresHeads;
    return (
      <Page>
        <Tasks
          data={proceduresList}
          content={"procedures"}
          action={this.applyTask}
          info={"Procedure"}
        />
      </Page>
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
    getUserData: () => dispatch(getUserData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Procedures);
