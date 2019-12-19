import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  cardTemplate: {
    padding: "20px 20px 0 20px",
    display: "flex",
    flexWrap: "wrap"
  }
});

const CardTemplate = props => {
  const { classes } = props;
  const getContent = () =>
    props.targetSchedule.map((item, i) => (
      <Card id={props.id} item={item} key={i} />
    ));

  return (
    <Grid container className={classes.cardTemplate}>
      {getContent()}
    </Grid>
  );
};

export default withStyles(styles)(CardTemplate);
