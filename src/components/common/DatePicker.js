import React from "react";
import { connect } from "react-redux";
import { editProcedureDate } from "../../action/ProceduresActions";
import { useState } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  datePicker: {
    width: "0px",
    marginRight: "60px"
  },
  display: {
    display: "none"
  }
});

const DatePicker = props => {
  const { classes } = props;
  const flag = props.procedures.periodicity === "single";
  const [selectedDate, setSelectedDate] = useState(
    new Date(`${props.dateNow}T23:55:00`)
  );

  const handleDateChange = date => {
    setSelectedDate(date);
    props.editProcedureDate([
      date.getFullYear(),
      date.getMonth() + 1,
      flag ? date.getDate() : `${date}`.split(" ")[0]
    ]);

    document
      .getElementById("TimePicker")
      .getElementsByTagName("button")[0]
      .click();
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        container
        justify="space-around"
        className={
          flag ? classes.datePicker : `${classes.datePicker} ${classes.display}`
        }
      >
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label=""
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
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
  connect(mapStateToProps, mapDispatchToProps)(DatePicker)
);
