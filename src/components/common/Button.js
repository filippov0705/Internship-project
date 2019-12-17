import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

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
    width: "85px",
    height: "40px",
    border: "1px solid gray",
    borderRadius: "7px",
    marginLeft: "80px",
    marginRight: "15px",
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

  function getLinkButton() {
    return (
      <Tooltip title={props.title}>
        <Link to={props.linkTo} className={classes.link}>
          <button className={classes.btn}>{props.children}</button>
        </Link>
      </Tooltip>
    );
  }

  function getActionButton() {
    return (
      <Tooltip title={props.title}>
        {/* <Link to={props.linkTo} className={classes.link}> */}
        <button className={classes[props.title]} onClick={props.btnAction}>
          {props.children}
        </button>
        {/* </Link> */}
      </Tooltip>
    );
  }

  function getSimpleButton() {
    return (
      <Link to={props.linkTo} className={classes.link}>
        <button className={classes[props.looks]} onClick={props.btnAction}>
          {props.message}
        </button>
      </Link>
    );
  }

  function getButton() {
    switch (props.type) {
      case "link":
        return getLinkButton();

      case "action":
        return getActionButton();

      case "simple":
        return getSimpleButton();

      default:
        return null;
    }
  }

  return getButton();
  // return (
  //   <Tooltip title={props.title}>
  //     <Link to={props.linkTo} className={classes.link}>
  //       <button className={classes[props.title]} onClick={props.btnAction}>
  //         {props.children}
  //       </button>
  //     </Link>
  // </Tooltip>
  // )
};

export default withStyles(styles)(Button);
