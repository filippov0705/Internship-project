import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {
  procedureScheduleUrl,
  editProcedureUrl,
  procedureInfoUrl
} from "../../utils/BuildPaths";
import ScheduleRoundedIcon from "@material-ui/icons/ScheduleRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import PlayCircleFilledWhiteRoundedIcon from "@material-ui/icons/PlayCircleFilledWhiteRounded";
import Button from "./Button";

const styles = theme => ({
  itemName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  btn: {
    backgroundColor: "white",
    border: "none"
  },
  link: {
    cursole: "none"
  },
  icon: {
    marginTop: "5px"
  }
});

const ItemButtons = props => {
  const { classes } = props;

  return (
    <Grid item xs={12} sm={3} className={classes.itemName}>
      <Button
        type={"link"}
        title={"Schedule"}
        linkTo={procedureScheduleUrl(props.id)}
      >
        <ScheduleRoundedIcon className={classes.icon} />
      </Button>
      <Button type={"link"} title={"Edit"} linkTo={editProcedureUrl(props.id)}>
        <EditRoundedIcon className={classes.icon} />
      </Button>
      <Button type={"link"} title={"Tasks"} linkTo={procedureInfoUrl(props.id)}>
        <MoreHorizRoundedIcon className={classes.icon} />
      </Button>
      <Button type={"action"} title={"Run"}>
        <PlayCircleFilledWhiteRoundedIcon />
      </Button>
    </Grid>
  );
};

export default withStyles(styles)(ItemButtons);
