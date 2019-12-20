import React from "react";
import { connect } from "react-redux";
import { editProcedureDate } from "../../action/ProceduresActions";
import { useState } from "react";
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
    setSelectedDate(date);
    props.addSchedule(date.getHours(), date.getMinutes());
  };

  const btnClick = () => {
    document.getElementsByClassName("MuiIconButton-root")[6].click();
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
        <Grid container justify="space-around" className={classes.datePicker}>
          <KeyboardTimePicker
            className="this"
            margin="normal"
            id="time-picker"
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
    editProcedureDate: date => dispatch(editProcedureDate(date))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TimePicker)
);
