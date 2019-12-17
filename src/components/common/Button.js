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
  }
});

const Button = props => {
  const { classes } = props;

  return (
    <Link to={props.linkTo} className={classes.link}>
      <button className={classes[props.looks]} onClick={props.btnAction}>
        {props.children}
      </button>
    </Link>
  );
};

export default withStyles(styles)(Button);
