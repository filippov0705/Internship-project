import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import { connect } from "react-redux";
import {
  editProceduresList,
  editProcedureDate,
  setPeriodicity
} from "../../action/ProceduresActions";
import DaysOfTheWeekBtns from "./DaysOfTheWeekButtons";
import RadioBtn from "./Radio";
import CardTemplate from "./CardTemplate";

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
  timeNow = () => {
    return `${new Date().getFullYear()}-${new Date().getMonth() +
      1}-${new Date().getDate()}`;
  };

  addSchedule = (hours, minutes) => {
    const newProceduresList = this.props.procedures.proceduresList.map(item => {
      if (item.id === this.props.id)
        item.schedule.push({
          value: [...this.props.procedures.prcedureNewDate, hours, minutes],
          id: (Math.random() * 10000000 + "").split(".")[0]
        });
      return item;
    });

    this.props.editProceduresList(newProceduresList);
  };

  render() {
    const { classes } = this.props;
    const targetSchedule = this.props.procedures.proceduresList.filter(
      item => item.id === this.props.id
    )[0].schedule;

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
            <TimePicker
              id={this.props.id}
              dateNow={this.timeNow()}
              addSchedule={this.addSchedule}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <CardTemplate id={this.props.id} targetSchedule={targetSchedule} />
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
