import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Tasks from '../task/Tasks';
import Input from '../../../common/Input';
import Button from '../../../common/Button'; 
import { ProceduresPath } from '../../../../utils/BuildPaths';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { newProcedureCreate } from '../../../../action/ProceduresActions';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    gridStyle: {
        display: 'flex'
    }
});

class ProcedureAdd extends Component {

    createProcedure = () => {
        const newProcedure = {
            name: this.props.procedures.newProcedureName || `Procedure-${(Math.random() * 10000000 + '').split('.')[0]}`,
            id: (Math.random() * 10000000 + '').split('.')[0],
            scedule: '',
            tasks: this.props.procedures.chosenTasks
        }

        this.props.newProcedureCreate(newProcedure)
    }

    render() {
        const { classes } = this.props;

        return (
            <>
            <Input label={<FormattedMessage id="label.procedureName" />}/>
            <Grid className={classes.gridStyle}>
                <Tasks content={'availableProcedures'}/>
                <Tasks content={'chosenProcedures'} />
            </Grid>
            <Grid className={classes.gridStyle}>
                <Button btnAction={this.createProcedure} type={'simple'} linkTo={ProceduresPath()} message={'Apply'} looks={'applyBtn'} />
                <Button type={'simple'} linkTo={ProceduresPath()} message={'Go back'} looks={'applyBtn'} />
            </Grid>
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        procedures: store.procedures
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        newProcedureCreate: newProcedure => dispatch(newProcedureCreate(newProcedure))
    }
  }

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProcedureAdd));