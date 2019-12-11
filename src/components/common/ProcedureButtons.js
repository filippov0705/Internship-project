import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { procedureScheduleUrl, editProcedureUrl, procedureInfoUrl } from '../../utils/BuildPaths';
import Button from './Button'

const styles = theme => ({
    itemName: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btn: {
        backgroundColor: 'white',
        border: 'none',
    },
    link: {
        cursole: 'none'
    },
    icon: {
        marginTop: '5px'
    }
  })

const ProcedureButtons = props => {
    const { classes } = props;  

    return (
        <Grid 
         item 
         xs={12} sm={3}
         className={classes.itemName}>
             <Button type={'link'} title={'Schedule'} linkTo={procedureScheduleUrl(props.id)} />
             <Button type={'link'} title={'Edit'} linkTo={editProcedureUrl(props.id)} />
             <Button type={'link'} title={'More'} linkTo={procedureInfoUrl(props.id)} />
             <Button type={'action'} title={'Run'} />
        </Grid>
    )
}

export default withStyles(styles)(ProcedureButtons);