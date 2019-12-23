import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import mainTheme from "../../style/theme";

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
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "yellowgreen"
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
    width: 80,
    height: 40,
    margin: 5,
    borderRadius: 7,
    cursor: "pointer"
  },
  sceduleBtnActive: {
    width: 80,
    height: 40,
    margin: 5,
    borderRadius: 7,
    cursor: "pointer",
    backgroundColor: "white"
  },
  cardRemove: {
    ...mainTheme.cardColor,
    position: "absolute",
    border: "none",
    top: 7,
    right: 0,
    width: 28,
    height: 28,
    padding: "0",
    borderRadius: "50%"
  },
  cardEdit: {
    ...mainTheme.cardColor,
    position: "absolute",
    border: "none",
    top: 7,
    right: 32
  },
  schedule: {
    backgroundColor: "#A6A6A6",
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
