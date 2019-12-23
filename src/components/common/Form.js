import React, { Component } from "react";
import Input from "./Input";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "./Button";
import { FormattedMessage } from "react-intl";
import List from "./List";
import { connect } from "react-redux";
import {} from "../../action/ProceduresActions";

const styles = theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "400px",
    alignItems: "center"
  }
});

class Form extends Component {
  formSubmit = () => {
    this.props.handleClose();
  };

  render() {
    const { classes } = this.props,
      possibleTasks = this.props.procedures.possibleTasks;

    return (
      <form className={classes.form} onSubmit={this.formSubmit}>
        <Input label={<FormattedMessage id="addPopUp.procedureName" />} />
        <List data={possibleTasks} info={"Task"} flag={"editable"} />
        <Input />
        <Button type={"submit"} onClick={this.formSubmit} />
      </form>
    );
  }
}

const mapStateToProps = store => {
  return {
    procedures: store.procedures
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Form)
);
