import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Tasks from '../task/Tasks';
import Input from '../../../common/Input';
import Button from '../../../common/Button'; 
import { ProceduresPath } from '../../../../utils/BuildPaths';
import Grid from '@material-ui/core/Grid';

class ProcedureAdd extends Component {

  render() {
        return (
            <>
                <Input label={<FormattedMessage id="label.procedureName" />}/>
                <Grid style={{display: 'flex'}}>
                    <Tasks content={'availableProcedures'}/>
                    <Tasks content={'chosenProcedures'} />
                </Grid>
                <Button type={'simple'} linkTo={ProceduresPath()} message={'Apply'} look />
            </>
        )
    }
}

 export default ProcedureAdd;