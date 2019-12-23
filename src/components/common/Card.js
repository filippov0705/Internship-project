import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../common/Button";
import { procedureScheduleUrl } from "../../utils/BuildPaths";
import { connect } from "react-redux";
import { editProceduresList } from "../../action/ProceduresActions";
import moment from "moment";
import mainTheme from "../../style/theme";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  cardWrapper: {
    width: "100%",
    height: "40px",
    ...mainTheme.cardColor,
    margin: "9px",
    borderRadius: "5px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px"
  },
  timeWrapper: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px"
  },
  span: {
    marginRight: "8px"
  },
  disappearing: {
    [theme.breakpoints.up("xs")]: {
      display: "none"
    },
    [theme.breakpoints.up("sm")]: {
      display: "box"
    }
  }
});

const Card = props => {
  const { classes } = props;
  const value = props.item.value;
  const daysInAWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getContent = () => {
    if (typeof value[0] === "string") {
      const weekSchedule = value.filter(item => typeof item === "string");

      weekSchedule.sort((a, b) => {
        if (daysInAWeek.indexOf(a) > daysInAWeek.indexOf(b)) return 1;
        if (daysInAWeek.indexOf(a) < daysInAWeek.indexOf(b)) return -1;
        return null;
      });

      return (
        <div className={classes.timeWrapper}>
          <span className={`${classes.span} ${classes.disappearing}`}>
            Runs every
          </span>
          <span className={classes.span}>{weekSchedule.join(" ")}</span>
          <span className={`${classes.span} ${classes.disappearing}`}>at</span>
          <span>
            {moment([
              2019,
              9,
              31,
              value[value.length - 2],
              value[value.length - 1]
            ]).format("hh:mm a")}
          </span>
        </div>
      );
    } else {
      return (
        <div className={classes.timeWrapper}>
          <span className={`${classes.span} ${classes.disappearing}`}>
            Runs only on
          </span>
          <span className={classes.span}>
            {moment([
              props.item.value[0],
              props.item.value[1] - 1,
              props.item.value[2]
            ]).format("DD MM YYYY")}
          </span>
          <span className={`${classes.span} ${classes.disappearing}`}>at</span>
          <span>
            {moment([
              2019,
              9,
              31,
              value[value.length - 2],
              value[value.length - 1]
            ]).format("hh:mm a")}
          </span>
        </div>
      );
    }
  };

  const btnAction = () => {
    const newProcedureList = props.procedures.proceduresList.map(item => {
      if (item.id === props.id) {
        item.schedule = item.schedule.filter(val => val.id !== props.item.id);
      }
      return item;
    });

    props.editProceduresList(newProcedureList);
  };

  return (
    <div className={classes.cardWrapper}>
      <Button
        linkTo={procedureScheduleUrl(props.id)}
        looks={"cardRemove"}
        btnAction={btnAction}
      >
        <DeleteIcon />
      </Button>
      {getContent()}
    </div>
  );
};

const mapStateToProps = store => {
  return {
    procedures: store.procedures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editProceduresList: list => dispatch(editProceduresList(list))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Card)
);
