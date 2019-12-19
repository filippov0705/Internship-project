import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData } from "../../../../action/ProceduresActions";
import SearchBar from "../../../common/SearchBar";
import Page from "../../../common/Page";
import Tasks from "../task/Tasks";

class Procedures extends Component {
  componentDidMount() {
    this.props.getUserData(this.props.mockData.allProceduresHeads);
  }

  render() {
    const proceduresList = this.props.procedures.proceduresList;
    return (
      <Page>
        <SearchBar />
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
    getUserData: data => dispatch(getUserData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Procedures);
