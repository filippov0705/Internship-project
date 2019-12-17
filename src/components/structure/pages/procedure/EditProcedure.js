import React, { Component } from "react";
import Tasks from "../task/Tasks";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  setChosenTasks,
  editProceduresList,
  applyTaskForProcedure
} from "../../../../action/ProceduresActions";
import ProcedurePage from "./ProcedurePage";
import Tabs from "../../../common/Tabs";

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
    const targetProcedure = this.props.procedures.proceduresList.find(
      item => item.id === this.props.match.params.id
    );
    this.props.setChosenTasks(targetProcedure.tasks);
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
    const newPeocedureList = this.props.procedures.proceduresList.map(item => {
      if (item.id === this.props.match.params.id) {
        item.tasks = newTaskList;
      }
      return item;
    });

    this.props.editProceduresList(newPeocedureList);
    this.props.setChosenTasks(newTaskList);
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
    this.props.setChosenTasks(newChosenTasks);
  };

  render() {
    const { classes } = this.props;
    const id = this.props.match.params.id;

    return (
      <ProcedurePage>
        <Tabs data={"edit"} id={id} />
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
    setChosenTasks: tasks => dispatch(setChosenTasks(tasks)),
    editProceduresList: list => dispatch(editProceduresList(list)),
    applyTaskForProcedure: task => dispatch(applyTaskForProcedure(task))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(EditProcedure)
);
