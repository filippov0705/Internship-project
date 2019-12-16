import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import DatePicker from './DatePicker';
import { connect } from 'react-redux';
import Tasks from '../structure/pages/task/Tasks';
import Button from '../common/Button';
import { ProceduresPath, editProcedureUrl } from '../../utils/BuildPaths';
import { editProceduresList, editProcedureDate } from '../../action/ProceduresActions';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DaysOfTheWeekBtns from './DaysOfTheWeekButtons';

const styles = theme => ({
    gridDisplay: {
      display: 'flex',
      flexDirection: 'column',
    },
    scheduleBtns: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class Schedule extends Component {

    componentDidMount() {
        this.props.editProcedureDate([this.timeNow(), '21:55:00'])
    }

    timeNow = () => {
        const dateNow = new Date();
        const yearNow = dateNow.getFullYear();
        const monthNow = dateNow.getMonth() + 1;
        const dayNow = dateNow.getDate();
        
        return `${yearNow}-${monthNow}-${dayNow}`;
    }

    addSchedule = () => {
        const newDate = this.props.procedures.prcedureNewDate;
        const newTime = this.props.procedures.procedureNewTime;
        const proceduresList = this.props.procedures.proceduresList;
        const targetProcedure = (proceduresList.find(item => item.id === this.props.id) || {});

        if (!newDate || !newTime) return;
        targetProcedure.schedule.push({name: `${newDate} ${newTime}`, value: [newDate, newTime]});
        const newProceduresList = proceduresList.map(item => {
            if(item.id === targetProcedure.id) return targetProcedure;
            return item;
        });
        this.props.editProceduresList(newProceduresList)
    } 

    render() {
    const {classes} = this.props;
    const proceduresList = this.props.procedures.proceduresList;
    const targetProcedure = (proceduresList.find(item => item.id === this.props.id) || {});
    const targetSchedule = targetProcedure.schedule;

    return (<>
        <Grid className={classes.gridDisplay}>
            <DatePicker id={this.props.id} dateNow={this.timeNow()} />
            <Grid container className={classes.scheduleBtns}>
                <Button 
                 btnAction={this.addSchedule}
                 type={'action'} 
                 title={'Add'} >
                     <AddCircleOutlineIcon />
                </Button> 
                <DaysOfTheWeekBtns />
             </Grid> 
        </Grid>
        <Tasks data={targetSchedule} content={'availableSchedule'}/>
        <Button 
         btnAction={null} 
         type={'simple'} 
         linkTo={ProceduresPath()} 
         message={'Procedures'} 
         looks={'applyBtn'} /> 
        <Button 
         btnAction={null} 
         type={'simple'} 
         linkTo={editProcedureUrl(this.props.id)} 
         message={'Edit'} 
         looks={'applyBtn'} />  
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
        editProceduresList: list => dispatch(editProceduresList(list)),
        editProcedureDate: date => dispatch(editProcedureDate(date))
    }
  }

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Schedule));