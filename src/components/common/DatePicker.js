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
  const proceduresList = props.procedures.proceduresList;
  const targetProcedure = (proceduresList.find(item => item.id === props.id) || {});
  const targetDate = (targetProcedure)

  console.log(targetProcedure)


  function editDate(event) {
      props.editProcedureDate(event.target.value);
  }

  return (
    <form className={classes.container} noValidate onClick={editDate}>
      <TextField
        id="date"
        label="Month/day/year"
        type="date"
        defaultValue='..-..-..'
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}/>
    </form>
  );
}

const mapStateToProps = store => {
  return {
      procedures: store.procedures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editProcedureDate: date => dispatch(editProcedureDate(date)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);