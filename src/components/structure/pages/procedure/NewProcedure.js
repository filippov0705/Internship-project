import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Tasks from "../task/Tasks";
import Input from "../../../common/Input";
import Button from "../../../common/Button";
import { ProceduresPath } from "../../../../utils/BuildPaths";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import {
  setChosenTasks,
  applyTaskForProcedure,
  removeChosenTask,
  setPossibleTasks
} from "../../../../action/ProceduresActions";
import { newProcedureCreate } from "../../../../action/MockDataActions";
import withStyles from "@material-ui/core/styles/withStyles";
import ProcedurePage from "./ProcedurePage";
import Heading from "../../../common/Heading";

const styles = theme => ({
  gridStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column-reverse"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  gridTasks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  }
});

class ProcedureAdd extends Component {
  componentDidMount() {
    this.props.setPossibleTasks(this.props.mockData.possibleTasks);
    this.props.setChosenTasks([]);
  }

  applyTask = event => {
    const targetTask = this.props.procedures.possibleTasks.filter(
      item => item.name === event.target.innerText
    )[0];
    const task = {
      name: targetTask.name,
      id: (Math.random() * 10000000 + "").split(".")[0]
    };
    this.props.applyTaskForProcedure(task);
  };

  createProcedure = () => {
    const newProcedure = {
      name:
        this.props.procedures.newProcedureName ||
        `Procedure-${(Math.random() * 10000000 + "").split(".")[0]}`,
      id: (Math.random() * 10000000 + "").split(".")[0],
      schedule: [
        {
          name: "12-9-2019 10-15",
          value: ["12-9-2019", "10-15"],
          periodicity: []
        }
      ],
      tasks: this.props.procedures.chosenTasks
    };

    this.props.newProcedureCreate(newProcedure);
  };

  removeTask = event => {
    const filteredTasks = this.props.procedures.chosenTasks.filter(
      item => item.id !== event.target.dataset.id
    );

    this.props.removeChosenTask(filteredTasks);
  };

  render() {
    const { classes } = this.props;

    return (
      <ProcedurePage>
        <Heading size={"big"} heading={"New procedure"} />
        <Grid className={classes.gridStyle}>
          <Input label={<FormattedMessage id="label.procedureName" />} />
          <Button
            looks={"applyBtn"}
            linkTo={ProceduresPath()}
            btnAction={this.createProcedure}
          >
            <span>Save</span>
          </Button>
        </Grid>
        <Grid className={classes.gridTasks}>
          <Tasks
            data={"possibleTasks"}
            content={"possibleTasks"}
            heading={"Available tasks"}
            action={this.applyTask}
          />
          <Tasks
            data={"chosenTasks"}
            content={"chosenTasks"}
            heading={"Selected tasks"}
            action={this.removeTask}
          />
        </Grid>
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
    newProcedureCreate: newProcedure =>
      dispatch(newProcedureCreate(newProcedure)),
    setChosenTasks: tasks => dispatch(setChosenTasks(tasks)),
    applyTaskForProcedure: task => dispatch(applyTaskForProcedure(task)),
    removeChosenTask: newArr => dispatch(removeChosenTask(newArr)),
    setPossibleTasks: data => dispatch(setPossibleTasks(data))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProcedureAdd)
);
