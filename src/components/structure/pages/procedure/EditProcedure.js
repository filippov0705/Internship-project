import React, { Component } from "react";
import Button from "../../../common/Button";
import Tasks from "../task/Tasks";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { procedureScheduleUrl } from "../../../../utils/BuildPaths";
import {
  setChosenTasks,
  editProceduresList
} from "../../../../action/ProceduresActions";
import ProcedurePage from "./ProcedurePage";
import Tabs from "../../../common/Tabs";

const styles = theme => ({
  gridDisplay: {
    display: "flex"
  }
});

class EditProcedure extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const proceduresList = this.props.procedures.proceduresList;
    const targetProcedure = proceduresList.find(item => item.id === id);
    const chosenTasks = targetProcedure.tasks;
    this.props.setChosenTasks(chosenTasks);
  }

  editProcedure = () => {
    const id = this.props.match.params.id;
    const proceduresList = this.props.procedures.proceduresList;
    const newProcedureList = proceduresList.map(item => {
      if (item.id === id) {
        item.tasks = this.props.procedures.chosenTasks;
      }
      return item;
    });
    this.props.editProceduresList(newProcedureList);
  };

  render() {
    const { classes } = this.props;
    const id = this.props.match.params.id;

    return (
      <ProcedurePage>
        <Tabs />
        <Grid className={classes.gridDisplay}>
          <Tasks data={"possibleTasks"} content={"possibleTasks"} />
          <Tasks data={"chosenTasks"} content={"chosenTasks"} />
        </Grid>
        <Button
          btnAction={this.editProcedure}
          type={"simple"}
          linkTo={this.props.location.pathname}
          message={"Apply"}
          looks={"applyBtn"}
        />
        <Button
          type={"simple"}
          linkTo={procedureScheduleUrl(id)}
          message={"Schedule"}
          looks={"applyBtn"}
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
    setChosenTasks: tasks => dispatch(setChosenTasks(tasks)),
    editProceduresList: list => dispatch(editProceduresList(list))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(EditProcedure)
);
