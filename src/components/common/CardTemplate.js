import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "./Card";

const styles = theme => ({});

const CardTemplate = props => {
  return (
    <div style={{ display: "flex" }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default withStyles(styles)(CardTemplate);
