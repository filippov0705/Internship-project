import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../common/Button";
import { procedureScheduleUrl } from "../../utils/BuildPaths";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { editProceduresList } from "../../action/ProceduresActions";

const styles = theme => ({
  cardWrapper: {
    width: "120px",
    height: "150px",
    backgroundColor: "#3f51b586",
    margin: "9px",
    borderRadius: "5px",
    position: "relative"
  },
  timeWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "20px",
    marginTop: "35px"
  }
});

const Card = props => {
  const { classes } = props;
  const getContent = () => {
    if (typeof props.item.value[2] === "string") {
      return (
        <div className={classes.timeWrapper}>
          <span>{props.item.value[2]}</span>
          <span>{`${props.item.value[3]}:${props.item.value[3]}`}</span>
        </div>
      );
    } else {
      return (
        <div className={classes.timeWrapper}>
          <span>{`${props.item.value[2]}-${props.item.value[1]}-${props.item.value[0]}`}</span>
          <span>{`${props.item.value[3]}:${props.item.value[3]}`}</span>
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
