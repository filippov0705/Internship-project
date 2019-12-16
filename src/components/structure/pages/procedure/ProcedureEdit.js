import React, { Component } from 'react';
import Button from '../../../common/Button'; 
// import Tasks from '../task/Tasks'; // TODO able when Tasks will be used again
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { ProceduresPath, procedureScheduleUrl } from '../../../../utils/BuildPaths';

const styles = theme => ({
  gridDisplay: {
    display: 'flex'
  }
  });

class ProcedureInfo extends Component {

  render() {
    const { classes } = this.props;
    const id = this.props.id;

    return (
      <>
      <Grid className={classes.gridDisplay}>
          {/* <Tasks content={'availableProcedures'}/> //TODO: IMPLEMENT PROPRIATE LOGIC
          <Tasks content={'chosenProcedures'} /> */}
      </Grid>
      <Button btnAction={this.createProcedure} type={'simple'} linkTo={ProceduresPath()} message={'Apply'} looks={'applyBtn'} />
      <Button type={'simple'} linkTo={procedureScheduleUrl(id)} message={'Schedule'} looks={'applyBtn'} />
      <Button type={'simple'} linkTo={ProceduresPath()} message={'Go back'} looks={'applyBtn'} />
      </>
    )

    }
}

export default withStyles(styles)(ProcedureInfo);