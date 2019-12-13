import React, { Component } from 'react';
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

export default function DatePicker() {
  const classes = useStyles();
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDate();


  function showDate(event) {
      console.log(event.target.value)
  }

  return (<>
    <form className={classes.container} noValidate onClick={showDate}>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue={`${todayYear}-${todayMonth}-${todayDay}`}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </>
  );
}