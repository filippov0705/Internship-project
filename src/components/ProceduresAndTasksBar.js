import React from 'react'
import Grid from '@material-ui/core/Grid';
import ProcedureTask from './ProcedureTask'

const ProceduresAndTasksBar = props => (
<Grid 
  item 
  style={{
    height: '665px', 
    backgroundColor: 'white', 
    margin: '20px',
    border: '1px solid gray',
    borderRadius: '7px'}}>
        <ProcedureTask data={props.data} />
</Grid>
)

export default ProceduresAndTasksBar;