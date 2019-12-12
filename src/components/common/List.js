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
    borderRadius: '7px'
  },
  availableProcedures: {
      height: '200px',
      backgroundColor: 'white', 
      margin: '20px',
      border: '1px solid gray',
      borderRadius: '7px'
  },
  chosenProcedures: {
    height: '200px',
    backgroundColor: 'white', 
    margin: '20px',
    border: '1px solid gray',
    borderRadius: '7px'
},
});


const List = props => {
const {classes} = props;
console.log(props.content)

  function itemCreation(data) {
    return data.map((item, i) => {
      return (
        <Item info={props.info} name={item.name}  flag={props.flag || 'uneditable'} id={item.id} key={i}/>
      )
    });
  }

  return (
    <Grid 
     xs={(props.content === 'availableProcedures' || 'chosenProcedures') ? 6 : 12}  
     item className={classes[props.content]}>
      {itemCreation(props.data)}
    </Grid>
  );
 }

export default withStyles(styles)(List);