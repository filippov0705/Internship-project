import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  cardWrapper: {
    width: "120px",
    height: "150px",
    backgroundColor: "rgba(128, 128, 128, 0.529)",
    margin: "5px",
    borderRadius: "5px"
  }
});

const Card = props => {
  const { classes } = props;

  return <div className={classes.cardWrapper}></div>;
};

export default withStyles(styles)(Card);
