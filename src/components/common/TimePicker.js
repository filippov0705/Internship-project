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

const styles = theme => ({
  datePicker: {
    width: "0px",
    display: "none"
  }
});

const TimePicker = props => {
  const { classes } = props;
  const [selectedDate, setSelectedDate] = useState(
    new Date(`${props.dateNow}T23:55:00`)
  );

  const handleDateChange = date => {
    const datePickerValue = JSON.stringify(date)
      .slice(1, 20)
      .split("T");
    console.log(date);
    setSelectedDate(date);
    editProcedureDate(datePickerValue);
  };

  return (
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
