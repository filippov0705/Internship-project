import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Tasks from '../task/Tasks';
import Input from '../../../common/Input';
import Button from '../../../common/Button'; 
import { ProceduresPath } from '../../../../utils/BuildPaths';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { newProcedureCreate, setChosenTasks } from '../../../../action/ProceduresActions';
import withStyles from '@material-ui/core/styles/withStyles';
import ProcedurePage from './ProcedurePage';
import Heading from '../../../common/Heading';

const styles = theme => ({
    gridStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});

class ProcedureAdd extends Component {

    componentDidMount() {
        this.props.setChosenTasks([]);
    }

    createProcedure = () => {
        const newProcedure = {
            name: this.props.procedures.newProcedureName || `Procedure-${(Math.random() * 10000000 + '').split('.')[0]}`,
            id: (Math.random() * 10000000 + '').split('.')[0],
            schedule: [{name: '12-9-2019 10-15', value: ['12-9-2019', '10-15'], periodicity: []}],
            tasks: this.props.procedures.chosenTasks,
        }

        this.props.newProcedureCreate(newProcedure)
    }

    render() {
        const { classes } = this.props;

        return (
            <ProcedurePage>
                <Heading size={'big'} heading={'Add new procedure'} />
                <Grid className={classes.gridStyle}>
                    <Input label={<FormattedMessage id="label.procedureName" />}/>
                    <Button btnAction={this.createProcedure} type={'simple'} linkTo={ProceduresPath()} message={'Apply'} looks={'applyBtn'} />
                </Grid>
                <Grid className={classes.gridStyle}>
                    <Tasks data={'possibleTasks'} content={'possibleTasks'} heading={'Types of available tasks'}/>
                    <Tasks data={'chosenTasks'} content={'chosenTasks'}  heading={'Chosen tasks'} />
                </Grid>
            </ProcedurePage>
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
        newProcedureCreate: newProcedure => dispatch(newProcedureCreate(newProcedure)),
        setChosenTasks: tasks => dispatch(setChosenTasks(tasks))
    }
  }

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProcedureAdd));