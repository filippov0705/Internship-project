import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function TimePicker() {
  const classes = useStyles();

  function setTime(event) {
    console.log(event.target.value)
  }

  return (
    <form className={classes.container} noValidate onChange={setTime}>
      <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
      />
    </form>
  );
}