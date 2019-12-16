import React, { Component } from 'react';
import Button from '../../../common/Button'; 
import Tasks from '../task/Tasks';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { ProceduresPath, procedureScheduleUrl } from '../../../../utils/BuildPaths';
import ProcedurePage from './ProcedurePage';

const styles = theme => ({
  gridDisplay: {
    display: 'flex'
  }
  });

class EditProcedure extends Component {

  render() {
    const { classes } = this.props;
    const id = this.props.match.params.id;

    return (
      <ProcedurePage>
        <Grid className={classes.gridDisplay}>
            <Tasks content={'availableProcedures'}/>
            <Tasks content={'chosenProcedures'} />
        </Grid>
        <Button btnAction={this.createProcedure} type={'simple'} linkTo={ProceduresPath()} message={'Apply'} looks={'applyBtn'} />
        <Button type={'simple'} linkTo={procedureScheduleUrl(id)} message={'Schedule'} looks={'applyBtn'} />
        <Button type={'simple'} linkTo={ProceduresPath()} message={'Go back'} looks={'applyBtn'} />
      </ProcedurePage>
    )

    }
}

export default withStyles(styles)(EditProcedure);