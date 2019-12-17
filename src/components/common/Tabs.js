import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import {
  procedureInfoUrl,
  procedureScheduleUrl,
  editProcedureUrl
} from "../../utils/BuildPaths";

const styles = theme => ({
  tabsWrapper: {
    backgroundColor: "white",
    height: "60px",
    alignItems: "flex-end"
  },
  tab: {
    backgroundColor: "#3f51b5",
    height: "50px",
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px"
  },
  activeTab: {
    backgroundColor: "#cfe8fc",
    height: "50px",
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    color: "black",
    cursor: "auto"
  },
  link: {
    marginLeft: "10px",
    textDecoration: "none",
    width: "15%",
    minWidth: "100px"
  }
});

const Tabs = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.tabsWrapper}>
      <Link to={procedureScheduleUrl(props.id)} className={classes.link}>
        <Grid
          item
          xs={12}
          className={
            props.data === "schedule" ? classes.activeTab : classes.tab
          }
        >
          Schedule
        </Grid>
      </Link>
      <Link to={editProcedureUrl(props.id)} className={classes.link}>
        <Grid
          item
          xs={12}
          className={props.data === "edit" ? classes.activeTab : classes.tab}
        >
          Edit
        </Grid>
      </Link>
      <Link to={procedureInfoUrl(props.id)} className={classes.link}>
        <Grid
          item
          xs={12}
          className={props.data === "info" ? classes.activeTab : classes.tab}
        >
          Tasks
        </Grid>
      </Link>
    </Grid>
  );
};

export default withStyles(styles)(Tabs);
