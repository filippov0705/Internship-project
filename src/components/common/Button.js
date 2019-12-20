import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

const styles = theme => ({
  btn: {
    backgroundColor: "white",
    border: "none"
  },
  Run: {
    backgroundColor: "white",
    border: "none"
  },
  Add: {
    backgroundColor: "#cfe8fc",
    border: "none"
  },
  link: {
    cursole: "none"
  },
  icon: {
    marginTop: "5px"
  },
  addBtn: {
    position: "absolute",
    right: "-15px",
    top: "-15px",
    zIndex: "50",
    width: "40px",
    height: "40px",
    border: "1px solid gray",
    borderRadius: "50%",
    cursor: "pointer"
  },
  applyBtn: {
    width: "85px",
    height: "40px",
    border: "1px solid gray",
    borderRadius: "7px",
    marginLeft: "20px",
    marginRight: "20px",
    cursor: "pointer"
  },
  sceduleBtn: {
    width: "80px",
    height: "40px",
    margin: "5px",
    borderRadius: "7px",
    cursor: "pointer"
  },
  sceduleBtnActive: {
    width: "80px",
    height: "40px",
    margin: "5px",
    borderRadius: "7px",
    cursor: "pointer",
    backgroundColor: "white"
  },
  cardRemove: {
    position: "absolute",
    backgroundColor: "rgb(207, 0, 0)",
    top: "-8px",
    right: "-8px",
    width: "28px",
    height: "28px",
    padding: "0",
    borderRadius: "50%"
  },
  schedule: {
    backgroundColor: "#cfe8fc",
    borderRadius: "50%",
    border: "none",
    margin: "16px 0 11px 1px",
    cursor: "pointer"
  },
  hidden: {
    display: "none"
  }
});

const Button = props => {
  const { classes } = props;

  return (
    <Link to={props.linkTo} className={classes.link}>
      <button
        className={`${classes[props.looks]} button`}
        onClick={props.btnAction}
        data-info={props.info}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default withStyles(styles)(Button);
