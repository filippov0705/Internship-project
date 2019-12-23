import React, { Component } from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { newProcedureName } from "../../action/ProceduresActions";
import Tooltip from "@material-ui/core/Tooltip";

const styles = theme => ({
  input: {
    marginLeft: "10px",
    height: "30px",
    borderRadius: "5px",
    width: "220px"
  },
  label: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      alignItems: "center"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  labelSpan: {
    marginLeft: "20px"
  }
});

class Input extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      timerId: null
    };
  }

  componentDidMount() {
    this.props.newProcedureName("");
    if (this.props.data) {
      this.setState({ value: this.props.data });
    }
  }

  inputTextChange = event => {
    this.setState({
      value: event.target.value.substr(0, 25)
    });

    if (this.props.action) {
      clearTimeout(this.state.timerId);
      const timerId = setTimeout(this.props.action, 5000, event.target.value);
      return this.setState({ timerId: timerId });
    }
    if (event.target.value.length > 25) {
      return (event.target.value = event.target.value.substr(0, 25));
    }
    this.props.newProcedureName(event.target.value);
  };

  inputBlur = event => {
    if (!this.props.action) return;
    this.props.action(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <label className={classes.label}>
        <span className={classes.labelSpan}>{this.props.label}</span>
        <Tooltip title={"no more than 25 characters"}>
          <input
            className={classes.input}
            onChange={this.inputTextChange}
            value={this.state.value}
            onBlur={this.inputBlur}
          />
        </Tooltip>
      </label>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newProcedureName: name => dispatch(newProcedureName(name))
  };
};

export default withStyles(styles)(connect(null, mapDispatchToProps)(Input));
