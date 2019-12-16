import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { editProcedureDate } from '../../action/ProceduresActions';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = props => {

  const [selectedDate, setSelectedDate] = React.useState(new Date(`${props.dateNow}T23:55:00`));

  const handleDateChange = date => {
    const datePickerValue = JSON.stringify(date).slice(1, 20).split('T');

    setSelectedDate(date);
    editProcedureDate(datePickerValue)
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    editProcedureDate: date => dispatch(editProcedureDate(date)),
  }
}

export default connect(null, mapDispatchToProps)(DatePicker);