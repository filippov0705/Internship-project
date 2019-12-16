import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { editProcedureTime } from '../../action/ProceduresActions';

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

const TimePicker = props => {
  const classes = useStyles();


  function editTime(event) {
    props.editProcedureTime(event.target.value);
}

  return (
    <form className={classes.container} noValidate onChange={editTime}>
      <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue="23:59"
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

const mapDispatchToProps = dispatch => {
  return {
    editProcedureTime: date => dispatch(editProcedureTime(date)),
  }
}

export default connect(null, mapDispatchToProps)(TimePicker);