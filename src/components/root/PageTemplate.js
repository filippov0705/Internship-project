import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  proceduresWrapper: {
    backgroundColor: '#cfe8fc',
    glexGrow: '2',
    width: '100%',
    borderTopRightRadius: '5px',
    borderTopLeftRadius: '5px',
  }
  });

const PageTemplate = props => {
const { classes } = props;

    return (
        <React.Fragment>
            <Header />
            <CssBaseline />
            <Container maxWidth="lg" >
                <Typography 
                 component="div" 
                 className={classes.proceduresWrapper} >
                    {props.children}
                </Typography>
            </Container>
            <Footer />
        </React.Fragment>
    );
}

export default withStyles(styles)(PageTemplate);