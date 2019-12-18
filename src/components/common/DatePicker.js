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
  }
});

const DatePicker = props => {
  const { classes } = props;
  const [selectedDate, setSelectedDate] = useState(
    new Date(`${props.dateNow}T23:55:00`)
  );

  const handleDateChange = date => {
    const flag = props.procedures.periodicity === "single";

    setSelectedDate(date);
    props.editProcedureDate([
      date.getFullYear(),
      date.getMonth() + 1,
      flag ? date.getDate() : `${date}`.split(" ")[0]
    ]);

    document.getElementsByClassName("MuiIconButton-root")[6].click();
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" className={classes.datePicker}>
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
