import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { connect } from "react-redux";
import { setPeriodicity } from "../../action/ProceduresActions";

const useStyles = makeStyles(theme => ({
  formControl: {
    display: "flex",
    flexDirection: "row"
  }
}));

const RadioBtn = props => {
  const classes = useStyles();
  const [value, setValue] = useState(props.procedures.periodicity);

  const handleChange = event => {
    props.setPeriodicity(event.target.value);
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Periodicity</FormLabel>
      <RadioGroup
        className={classes.formControl}
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="single"
          control={<Radio />}
          label="Single time"
        />
        <FormControlLabel
          value="periodically"
          control={<Radio />}
          label="Periodically"
        />
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = store => {
  return {
    procedures: store.procedures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPeriodicity: periodicity => dispatch(setPeriodicity(periodicity))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioBtn);
