import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../common/Button";
import { procedureScheduleUrl } from "../../utils/BuildPaths";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { editProceduresList } from "../../action/ProceduresActions";

const styles = theme => ({
  cardWrapper: {
    width: "100%",
    height: "40px",
    backgroundColor: "#3f51b586",
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
  const getContent = () => {
    if (typeof props.item.value[2] === "string") {
      const dateSpan = props.item.value.map(item => {
        if (`${item}`.length === 1) return `0${item}`;
        return item;
      });
      return (
        <div className={classes.timeWrapper}>
          <span className={`${classes.span} ${classes.disappearing}`}>
            Runs every
          </span>
          <span className={classes.span}>{props.item.value[2]}</span>
          <span className={`${classes.span} ${classes.disappearing}`}>at</span>
          <span>{`${dateSpan[3]}:${dateSpan[4]}`}</span>
        </div>
      );
    } else {
      const dateSpan = props.item.value.map(item => {
        if (`${item}`.length === 1) return `0${item}`;
        return item;
      });
      return (
        <div className={classes.timeWrapper}>
          <span className={`${classes.span} ${classes.disappearing}`}>
            Runs only on
          </span>
          <span
            className={classes.span}
          >{`${dateSpan[2]}-${dateSpan[1]}-${dateSpan[0]}`}</span>
          <span className={`${classes.span} ${classes.disappearing}`}>at</span>
          <span>{`${dateSpan[3]}:${dateSpan[4]}`}</span>
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
        <CloseIcon />
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
