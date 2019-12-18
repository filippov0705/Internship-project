import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import { connect } from "react-redux";
// import { procedureScheduleUrl } from "../../utils/BuildPaths";
import {
  editProceduresList,
  editProcedureDate,
  setPeriodicity
} from "../../action/ProceduresActions";
import DaysOfTheWeekBtns from "./DaysOfTheWeekButtons";
import RadioBtn from "./Radio";

const styles = theme => ({
  gridDisplay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  scheduleBtns: {
    display: "flex",
    justifyContent: "center"
  },
  calendar: {
    margin: "0 auto"
  },
  radio: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px"
  }
});

class Schedule extends Component {
  componentDidMount() {
    this.props.editProcedureDate([this.timeNow(), "21:55:00"]);
  }

  timeNow = () => {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const monthNow = dateNow.getMonth() + 1;
    const dayNow = dateNow.getDate();
    //объеденить
    return `${yearNow}-${monthNow}-${dayNow}`;
  };
  //переименовать и вынести в отдельную функцию
  addSchedule = () => {
    const newDate = this.props.procedures.prcedureNewDate;
    const newTime = this.props.procedures.procedureNewTime;
    const proceduresList = this.props.procedures.proceduresList;
    const targetProcedure = this.props.targetProcedure;
    const daysInAWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const periodisity = daysInAWeek.reduce((sum, cur) => {
      if (this.props.procedures.periodicity.includes(cur))
        return `${sum} ${cur}`;
      return sum;
    }, "");

    if (!newDate || !newTime) return;
    targetProcedure.schedule.push({
      name: `${newDate} ${newTime} ${periodisity} `,
      value: [newDate, newTime],
      periodicity: this.props.procedures.periodicity
    });
    const newProceduresList = proceduresList.map(item => {
      if (item.id === targetProcedure.id) return targetProcedure;
      return item;
    });
    this.props.editProceduresList(newProceduresList);
  };

  render() {
    const { classes } = this.props;
    // const targetProcedure = this.props.targetProcedure;
    // const targetSchedule = targetProcedure.schedule;

    return (
      <React.Fragment>
        <Grid className={classes.gridDisplay}>
          <Grid container className={classes.radio}>
            <RadioBtn />
          </Grid>
          <Grid container className={classes.scheduleBtns}>
            <DaysOfTheWeekBtns id={this.props.id} />
          </Grid>
          <div className={classes.calendar}>
            <DatePicker id={this.props.id} dateNow={this.timeNow()} />
            <TimePicker id={this.props.id} dateNow={this.timeNow()} />
          </div>
        </Grid>
      </React.Fragment>
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
    editProceduresList: list => dispatch(editProceduresList(list)),
    editProcedureDate: date => dispatch(editProcedureDate(date)),
    setPeriodicity: periodicity => dispatch(setPeriodicity(periodicity))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Schedule)
);
