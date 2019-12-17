import React from "react";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "./Button";
import { newProcedurePath } from "../../utils/BuildPaths";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  list: {
    height: "665px",
    backgroundColor: "white",
    margin: "20px",
    border: "1px solid gray",
    borderRadius: "7px",
    overflow: "auto"
  },
  possibleTasks: {
    minWidth: "170px",
    height: "200px",
    backgroundColor: "white",
    margin: "20px",
    border: "1px solid gray",
    borderRadius: "7px",
    overflow: "auto"
  },
  chosenTasks: {
    minWidth: "170px",
    height: "200px",
    backgroundColor: "white",
    margin: "20px",
    border: "1px solid gray",
    borderRadius: "7px",
    overflow: "auto"
  },
  data: {
    height: "620px",
    backgroundColor: "white",
    margin: "20px",
    border: "1px solid gray",
    borderRadius: "7px",
    overflow: "auto"
  },
  procedures: {
    height: "620px",
    backgroundColor: "white",
    margin: "20px",
    border: "1px solid gray",
    borderRadius: "7px",
    position: "relative"
  }
});

const List = props => {
  const { classes } = props;

  const itemCreation = data => {
    return data.map((item, i) => {
      return (
        <Item
          info={props.info}
          content={props.content}
          name={item.name}
          flag={props.flag || "uneditable"}
          id={item.id}
          key={i}
          action={props.action}
        />
      );
    });
  };

  return (
    <Grid item className={classes[props.content]}>
      {props.content === "procedures" ? (
        <Button looks={"addBtn"} linkTo={newProcedurePath()}>
          <AddIcon />
        </Button>
      ) : null}
      {itemCreation(props.data)}
    </Grid>
  );
};

export default withStyles(styles)(List);
