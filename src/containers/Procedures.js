import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../action/HeaderActions';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '../components/common/List';
import fakeData from '../mockData/fakeData.json';
import TransitionsModal from '../components/common/PopUpWindow'
import './App.css';

const styles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  rootDiv: {
    height: '80px',
    backgroundColor: '#252a3048',
    borderRadius: '5px',
    [theme.breakpoints.up('xs')]: {
      height: '140px',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      height: '80px'
    },
},
container: {
  display: 'flex',
  flexWrap: 'wrap',
},
textField: {
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  backgroundColor: 'white',
  borderRadius: '5px',
},
button: {
  marginRight: '15px',
  marginLeft: '15px'
},
proceduresWrapper: {
  backgroundColor: '#cfe8fc',
  width: '100%',
  borderTopRightRadius: '5px',
  borderTopLeftRadius: '5px',
}
});


class Procedures extends Component {

  componentDidMount() {
    //TODO: Add logic
  }

    render() {
      const { classes } = this.props;

      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" >
            <Typography 
             component="div" 
             className={classes.proceduresWrapper} >
              <Grid 
               container
               className={classes.rootDiv}
               justify="space-between"
               alignItems="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                   id="outlined-search"
                   label="Filter"
                   type="search"
                   className={classes.textField}
                   margin="normal"
                   variant="outlined"/>
                </Grid>
                <Grid item>
                    <TransitionsModal data={'Add'} action={this.handleClose}/>
                </Grid>
              </Grid>
              <List data={'Procedure'} content={fakeData} />
            </Typography>
          </Container>
        </React.Fragment>
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
      // getUserData: data => dispatch(getUserData(data)),
    }
  }
  
  export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Procedures));