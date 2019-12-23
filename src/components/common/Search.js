import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 80,
    width: 170
  }
});

class Search extends Component {
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Search"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </form>
    );
  }
}

export default withStyles(styles)(Search);
