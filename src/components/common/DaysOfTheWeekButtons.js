import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { setPeriodicity } from "../../action/ProceduresActions";
import { procedureScheduleUrl } from "../../utils/BuildPaths";
import { editProcedureDate } from "../../action/ProceduresActions";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  today: {
    textShadow: "0 0 8px green"
  }
});

const DaysOfTheWeekBtns = props => {
  const { classes } = props;
  const today = `${new Date()}`.split(" ")[0];
  const period = props.procedures.periodicity;

  const btnClick = event => {
    editProcedureDate([
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate() + +event.target.closest("button").dataset.info
    ]);
    document.getElementsByClassName("MuiIconButton-root")[4].click();
  };

  return (
    <React.Fragment>
      <Button
        btnAction={btnClick}
        info={0}
        linkTo={procedureScheduleUrl(props.id)}
        looks={"sceduleBtn"}
      >
        <span
          className={
            today === "Mon" && period === "single" ? classes.today : null
          }
        >
          {today === "Mon" && period === "single" ? "Today" : "Mon"}
        </span>
      </Button>
      <Button
        btnAction={btnClick}
        info={1}
        linkTo={procedureScheduleUrl(props.id)}
        looks={"sceduleBtn"}
      >
        <span
          className={
            today === "Tue" && period === "single" ? classes.today : null
          }
        >
          {today === "Tue" && period === "single" ? "Today" : "Tue"}
        </span>
      </Button>
      <Button
        btnAction={btnClick}
        info={2}
        linkTo={procedureScheduleUrl(props.id)}
        looks={"sceduleBtn"}
      >
        <span
          className={
            today === "Wed" && period === "single" ? classes.today : null
          }
        >
          {today === "Wed" && period === "single" ? "Today" : "Wed"}
        </span>
      </Button>
      <Button
        btnAction={btnClick}
        info={3}
        linkTo={procedureScheduleUrl(props.id)}
        looks={"sceduleBtn"}
      >
        <span
          className={
            today === "Thu" && period === "single" ? classes.today : null
          }
        >
          {today === "Thu" && period === "single" ? "Today" : "Thu"}
        </span>
      </Button>
      <Button
        btnAction={btnClick}
        info={4}
        linkTo={procedureScheduleUrl(props.id)}
        looks={"sceduleBtn"}
      >
        <span
          className={
            today === "Fri" && period === "single" ? classes.today : null
          }
        >
          {today === "Fri" && period === "single" ? "Today" : "Fri"}
        </span>
      </Button>
      <Button
        btnAction={btnClick}
        info={5}
        linkTo={procedureScheduleUrl(props.id)}
        looks={"sceduleBtn"}
      >
        <span
          className={
            today === "Sat" && period === "single" ? classes.today : null
          }
        >
          {today === "Sat" && period === "single" ? "Today" : "Sat"}
        </span>
      </Button>
      <Button
        btnAction={btnClick}
        info={6}
        linkTo={procedureScheduleUrl(props.id)}
        looks={"sceduleBtn"}
      >
        <span
          className={
            today === "Sun" && period === "single" ? classes.today : null
          }
        >
          {today === "Sun" && period === "single" ? "Today" : "Sun"}
        </span>
      </Button>
    </React.Fragment>
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

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DaysOfTheWeekBtns)
);
