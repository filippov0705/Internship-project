import React, { Component } from 'react';
import Button from '../../../common/Button'; 
import Tasks from '../task/Tasks';
import Grid from '@material-ui/core/Grid';
import { ProceduresPath } from '../../../../utils/BuildPaths';

class ProcedureInfo extends Component {

  render() {

    return (
      <>
      <Grid style={{display: 'flex'}}>
          {/* <Tasks content={'availableProcedures'}/> //TODO: IMPLEMENT PROPRIATE LOGIC
          <Tasks content={'chosenProcedures'} /> */}
      </Grid>
      <Grid style={{display: 'flex'}}></Grid>
      <Button btnAction={this.createProcedure} type={'simple'} linkTo={ProceduresPath()} message={'Apply'} looks={'applyBtn'} />
      <Button type={'simple'} linkTo={ProceduresPath()} message={'Go back'} looks={'applyBtn'} />
      </>
    )

    }
}

 export default ProcedureInfo;