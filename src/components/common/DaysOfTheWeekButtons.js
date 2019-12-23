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
  const singlePeriodicityDatePick = event => {
    const info = event.target.closest("button").dataset.info;

    props.editProcedureDate([
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      Number.isNaN(+info) ? info : new Date().getDate() + +info
    ]);
    document
      .getElementsByClassName("MuiIconButton-root")
      [
        document.getElementsByClassName("MuiIconButton-root").length - 1
      ].click();
  };

  const multiplePeriodicityDatePick = event => {
    const ProcedureDate = props.procedures.prcedureNewDate;
    if (ProcedureDate.includes(event.target.closest("button").dataset.info)) {
      props.editProcedureDate(
        ProcedureDate.filter(
          item => item !== event.target.closest("button").dataset.info
        )
      );
    } else {
      ProcedureDate.push(event.target.closest("button").dataset.info);
      props.editProcedureDate(ProcedureDate);
    }
  };

  const createButtons = () => {
    const flag = props.procedures.periodicity === "single";
    const arr = [];
    const daysInAWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    for (let i = 0; i < 7; i++) {
      if (!flag) {
        arr.push(
          <Button
            key={i}
            btnAction={multiplePeriodicityDatePick}
            info={daysInAWeek[i]}
            linkTo={procedureScheduleUrl(props.id)}
            looks={
              props.procedures.prcedureNewDate.includes(daysInAWeek[i])
                ? "sceduleBtnActive"
                : "sceduleBtn"
            }
          >
            {daysInAWeek[i]}
          </Button>
        );
      } else {
        arr.push(
          <Button
            key={i}
            btnAction={singlePeriodicityDatePick}
            info={i}
            linkTo={procedureScheduleUrl(props.id)}
            looks={"sceduleBtn"}
          >
            {`${new Date(2019, 11, new Date().getDate() + i)}`.split(" ")[0]}
          </Button>
        );
      }
    }

    if (flag) {
      arr.sort((a, b) => {
        if (
          daysInAWeek.indexOf(a.props.children) >
          daysInAWeek.indexOf(b.props.children)
        )
          return 1;
        if (
          daysInAWeek.indexOf(a.props.children) <
          daysInAWeek.indexOf(b.props.children)
        )
          return -1;
        return null;
      });
    }

    return arr;
  };

  return <React.Fragment>{createButtons()}</React.Fragment>;
};

const mapStateToProps = store => {
  return {
    procedures: store.procedures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPeriodicity: periodicity => dispatch(setPeriodicity(periodicity)),
    editProcedureDate: date => dispatch(editProcedureDate(date))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DaysOfTheWeekBtns)
);
