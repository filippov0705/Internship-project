import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  rootDiv: {
    height: "80px",
    backgroundColor: "#252a3048",
    borderRadius: "5px",
    [theme.breakpoints.up("xs")]: {
      height: "140px"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      height: "80px"
    }
  }
});

class SearchBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.rootDiv}
        justify="space-between"
        alignItems="center"
      >
        <Search />
      </Grid>
    );
  }
}

export default withStyles(styles)(SearchBar);
