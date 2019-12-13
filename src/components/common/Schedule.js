import React from 'react'
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';
import { connect } from 'react-redux';
import Tasks from '../structure/pages/task/Tasks';
import Button from '../common/Button';
import { ProceduresPath, editProcedureUrl } from '../../utils/BuildPaths';
import { editProceduresList } from '../../action/ProceduresActions';

const styles = theme => ({
    gridDisplay: {
      display: 'flex'
    }
});

const Schedule = props => {
    const {classes} = props;
    const proceduresList = props.procedures.proceduresList;
    const targetProcedure = (proceduresList.find(item => item.id === props.id) || {});
    const targetSchedule = targetProcedure.schedule;

    function addSchedule() {
        const newDate = props.procedures.prcedureNewDate;
        const newTime = props.procedures.prcedureNewTime;

        if (!newDate || !newTime) return;
        targetProcedure.schedule.push({name: `${newDate} ${newTime}`, value: [newDate, newTime]});
        const newProceduresList = proceduresList.map(item => {
            if(item.id === targetProcedure.id) return targetProcedure;
            return item;
        });
        props.editProceduresList(newProceduresList)
    } 

    return (<>
        <Grid className={classes.gridDisplay}>
            <DatePicker id={props.id} />
            <TimePicker />
            <Button 
             btnAction={addSchedule}
             type={'action'} 
             title={'Add'} />  
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
         linkTo={editProcedureUrl(props.id)} 
         message={'Edit'} 
         looks={'applyBtn'} />  
        </>
    )
}

const mapStateToProps = store => {
    return {
        procedures: store.procedures
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        editProceduresList: list => dispatch(editProceduresList(list))
    }
  }

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Schedule));