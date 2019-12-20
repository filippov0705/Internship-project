import React, { Component } from "react";
import Tasks from "../task/Tasks";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  setChosenTasks,
  editProceduresList,
  applyTaskForProcedure,
  getUserData,
  setTargetProcedure,
  changeTaskList
} from "../../../../action/ProceduresActions";
import ProcedurePage from "./ProcedurePage";
import Tabs from "../../../common/Tabs";
import Heading from "../../../common/Heading";

const styles = theme => ({
  gridDisplay: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  }
});

class EditProcedure extends Component {
  componentDidMount() {
    this.props.setChosenTasks(this.props.match.params.id);
  }

  applyTask = event => {
    const targetTask = this.props.procedures.possibleTasks.filter(
      item => item.name === event.target.innerText
    )[0];
    const task = {
      name: targetTask.name,
      id: (Math.random() * 10000000 + "").split(".")[0]
    };
    const newTaskList = this.props.procedures.chosenTasks.concat(task);
    const newProcedureList = this.props.procedures.proceduresList.map(item => {
      if (item.id === this.props.match.params.id) {
        item.tasks = newTaskList;
      }
      return item;
    });

    this.props.editProceduresList(newProcedureList);
    this.props.changeTaskList(newTaskList);
  };

  removeTask = event => {
    const filteredTasks = this.props.procedures.chosenTasks.filter(
      item => item.id !== event.target.dataset.id
    );
    const newPeocedureList = this.props.procedures.proceduresList.map(item => {
      if (item.id === this.props.match.params.id) {
        item.tasks = filteredTasks;
      }
      return item;
    });
    const newChosenTasks = this.props.procedures.chosenTasks.filter(item => {
      return item.id !== event.target.dataset.id;
    });

    this.props.editProceduresList(newPeocedureList);
    this.props.changeTaskList(newChosenTasks);
  };

  render() {
    if (this.props.procedures.targetProcedure.length === 0) return null;
    const { classes } = this.props;

    return (
      <ProcedurePage>
        <Heading
          heading={this.props.procedures.targetProcedure[0].name}
          size={"big"}
          background={"pageLabel"}
        />
        <Tabs data={"edit"} id={this.props.match.params.id} />
        <Grid className={classes.gridDisplay}>
          <Tasks
            heading={"Types of available tasks"}
            data={"possibleTasks"}
            content={"possibleTasks"}
            action={this.applyTask}
          />
          <Tasks
            heading={"Chosen tasks"}
            data={"chosenTasks"}
            content={"chosenTasks"}
            action={this.removeTask}
          />
        </Grid>
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
    setTargetProcedure: id => dispatch(setTargetProcedure(id)),
    setChosenTasks: id => dispatch(setChosenTasks(id)),
    changeTaskList: taskList => dispatch(changeTaskList(taskList)),
    editProceduresList: list => dispatch(editProceduresList(list)),
    applyTaskForProcedure: task => dispatch(applyTaskForProcedure(task))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(EditProcedure)
);
