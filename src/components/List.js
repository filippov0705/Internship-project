import React from 'react'
import Grid from '@material-ui/core/Grid';
import Item from './Item';
import withStyles from '@material-ui/core/styles/withStyles';
import fakeData from '../mockData/fakeData.json';

const styles = theme => ({
  list: {
    height: '665px', 
    backgroundColor: 'white', 
    margin: '20px',
    border: '1px solid gray',
    borderRadius: '7px'
  }
});


const List = props => {
const {classes} = props;

function itemCreation(data) {
  return data.map((item, i) => {
    return (
      <Item data={props.data} name={item.name} spec={props.spec || null} id={item.id} key={i}/>
    )
  });
}

  return (
    <Grid item className={classes.list}>
      {itemCreation(props.content)}
    </Grid>
  );
 }

export default withStyles(styles)(List);