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
  const btnClick = event => {
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

  const createButtons = () => {
    const flag = props.procedures.periodicity === "single";
    const arr = [];
    const daysInAWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    for (let i = 0; i < 7; i++) {
      if (!flag) {
        arr.push(
          <Button
            key={i}
            btnAction={btnClick}
            info={daysInAWeek[i]}
            linkTo={procedureScheduleUrl(props.id)}
            looks={"sceduleBtn"}
          >
            {daysInAWeek[i]}
          </Button>
        );
      } else {
        arr.push(
          <Button
            key={i}
            btnAction={btnClick}
            info={i}
            linkTo={procedureScheduleUrl(props.id)}
            looks={"sceduleBtn"}
          >
            {!i ? "Today" : null}
            {i === 1 ? "Tomorrow" : null}
            {i > 1
              ? `${new Date(2019, 11, new Date().getDate() + i)}`.split(" ")[0]
              : null}
          </Button>
        );
      }
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
