import React, { Component } from 'react';
import { connect } from 'react-redux';
import { menuStateChange, redirectFromPage } from '../action/HeaderActions';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProceduresAndTasksBar from '../components/ProceduresAndTasksBar';
import './App.css';
import fakeData from './fakeData.json';

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
},
container: {
  display: 'flex',
  flexWrap: 'wrap',
},
textField: {
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: 200,
  backgroundColor: 'white',
  borderRadius: '5px',
},
});


class Procedures extends Component {

  componentDidMount() {

  }

    render() {
      const { classes } = this.props;
      console.log(fakeData[0].name)


        return (
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >
              <Typography 
                component="div" 
                style={{ 
                  backgroundColor: '#cfe8fc', 
                  height: '78vh', 
                  width: '100%',
                  borderTopRightRadius: '5px',
                  borderTopLeftRadius: '5px',
                  }} >
                <Grid 
                  container
                  className={classes.rootDiv}
                  justify="space-between"
                  alignItems="center">
                        <Grid item xs={6}>
                          <TextField
                            id="outlined-search"
                            label="Filter"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"/>
                        </Grid>
                        <Grid item>
                        <Button variant="contained" color="primary">
                          ADD
                        </Button>
                    </Grid>
                </Grid>
                <ProceduresAndTasksBar data={'Procedure'} />
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