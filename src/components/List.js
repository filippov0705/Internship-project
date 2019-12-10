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
  }
});


const List = props => {
const {classes} = props;

  return (
    <Grid item className={classes.list}>
      <Item data={props.data} />
    </Grid>
  );
 }

export default withStyles(styles)(List);