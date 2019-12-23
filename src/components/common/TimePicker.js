import React, { useState } from "react";
import { connect } from "react-redux";
import { editProcedureDate } from "../../action/ProceduresActions";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import withStyles from "@material-ui/core/styles/withStyles";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import { procedureScheduleUrl } from "../../utils/BuildPaths";
import {
  changeScheduleEdit,
  editProceduresList
} from "../../action/ProceduresActions";
import Button from "./Button";

const styles = theme => ({
  datePicker: {
    width: "0px",
    display: "none"
  }
});

const TimePicker = props => {
  const { classes } = props;
  const flag = props.procedures.periodicity === "single";
  const [selectedDate, setSelectedDate] = useState(
    new Date(`${props.dateNow}T23:55:00`)
  );

  const handleDateChange = date => {
    if (props.procedures.scheduleEdit) {
      props.changeScheduleEdit(false);
      const newProcedureList = props.procedures.proceduresList.map(item => {
        if (item.id === props.procedures.scheduleEdit[0]) {
          item.schedule = item.schedule.map(value => {
            if (value.id === props.procedures.scheduleEdit[1]) {
              value.value[value.value.length - 2] = date.getHours();
              value.value[value.value.length - 1] = date.getMinutes();
            }
            return value;
          });
        }
        return item;
      });
      return props.editProceduresList(newProcedureList);
    }
    setSelectedDate(date);
    if (props.procedures.prcedureNewDate.length === 0) return;
    props.addSchedule(date.getHours(), date.getMinutes());
  };

  const btnClick = () => {
    document
      .getElementById("TimePicker")
      .getElementsByTagName("button")[0]
      .click();
  };

  return (
    <React.Fragment>
      <Button
        linkTo={procedureScheduleUrl(props.id)}
        btnAction={btnClick}
        looks={flag ? "hidden" : "schedule"}
      >
        <AvTimerIcon />
      </Button>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid
          container
          justify="space-around"
          className={classes.datePicker}
          id="TimePicker"
        >
          <KeyboardTimePicker
            className="this"
            margin="normal"
            label=""
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
};

const mapStateToProps = store => {
  return {
    procedures: store.procedures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editProceduresList: list => dispatch(editProceduresList(list)),
    editProcedureDate: date => dispatch(editProcedureDate(date)),
    changeScheduleEdit: flag => dispatch(changeScheduleEdit(flag))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TimePicker)
);
