import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { editProcedureDate } from '../../action/ProceduresActions';

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

const DatePicker = props => {
  const classes = useStyles();
  const dateNow = new Date();
  const yearNow = dateNow.getFullYear();
  const monthNow = dateNow.getMonth();
  const dayNow = dateNow.getDate();

  function editDate(event) {
      props.editProcedureDate(event.target.value);
  }

  return (
    <form className={classes.container} noValidate onChange={editDate}>
      <TextField
        id="date"
        label="Month/day/year"
        type="date"
        defaultValue={`${yearNow}-${monthNow}-${dayNow}`}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}/>
    </form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    editProcedureDate: date => dispatch(editProcedureDate(date)),
  }
}

export default connect(null, mapDispatchToProps)(DatePicker);