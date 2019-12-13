import React from 'react'
import Grid from '@material-ui/core/Grid';
import Item from './Item';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  list: {
    height: '665px', 
    backgroundColor: 'white', 
    margin: '20px',
    border: '1px solid gray',
    borderRadius: '7px',
    overflow: 'auto'
  },
  availableProcedures: {
      height: '200px',
      backgroundColor: 'white', 
      margin: '20px',
      border: '1px solid gray',
      borderRadius: '7px',
      overflow: 'auto'
  },
  chosenProcedures: {
    height: '200px',
    backgroundColor: 'white', 
    margin: '20px',
    border: '1px solid gray',
    borderRadius: '7px',
    overflow: 'auto'
},
  ShowProcedureTasks: {
    height: '665px', 
    backgroundColor: 'white', 
    margin: '20px',
    border: '1px solid gray',
    borderRadius: '7px',
    overflow: 'auto'
  }
});


const List = props => {
  const {classes} = props;

  function itemCreation(data) {
    return data.map((item, i) => {
      return (
        <Item
         info={props.info}
         content={props.content}
         name={item.name}  
         flag={props.flag || 'uneditable'} 
         id={item.id} 
         key={i}/>
      )
    });
  }

  return (
    <Grid 
     xs={(props.info !== 'availableProcedures' || 'chosenProcedures') ? 12 : 6}  
     item className={classes[props.content]}>
      {itemCreation(props.data)}
    </Grid>
  );
 }

export default withStyles(styles)(List);