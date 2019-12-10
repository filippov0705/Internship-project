import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FooterLogo from '../styles/img/footer-logo.svg';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  columnGrid: {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '14px',
    color: 'white',
  },
  text: {
    color: 'white'
  },
  logo: {
    width: '150px',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  footerRight: {
    display: 'flex',
    alignItems: 'center'
  },
  footerContainer: {
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  }
})

const Footer = props => {
  const { classes } = props;

  return (
            <React.Fragment>
            <CssBaseline />
            <Container 
              maxWidth="xl" 
              style={{ 
                backgroundColor: '#24292e', 
                minHeight: '130px' }}>
                <Typography 
                  component="div" 
                  style={{
                    width: '100%', 
                    maxWidth: '1200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '10px'}} >
                    <Grid container className={classes.footerContainer}>
                      <Grid item xs={12} md={4}  className={classes.columnGrid}>
                        <img src={FooterLogo} alt="logo" className={classes.logo}/>
                        <span className={classes.text}>&#169; 2019 :iTechArt All Rights Reserved.</span>
                      </Grid>
                      <Grid item xs={12} md={8} className={classes.footerRight}>
                      <Grid item xs={6} className={classes.columnGrid}>
                        <span>Телефоны:</span>
                        <span>+375 33 38 76 163</span>
                        <span>+375 29 15 71 703</span>
                      </Grid>
                      <Grid item xs={6} className={classes.columnGrid}>
                        <span>E-mail: <a className={classes.text} href="mailto:careers@itechart-group.com">careers@itechart-group.com</a></span>
                        <span>Старт карьеры: <a className={classes.text} href="mailto:st.lab@itechart-group.com">st.lab@itechart-group.com</a></span>
                        <span>Сотрудничество: <a className={classes.text} href="mailto:pr@itechart-group.com">pr@itechart-group.com</a></span>
                      </Grid>
                      </Grid>
                    </Grid>
                </Typography>
            </Container>
          </React.Fragment>
        )
                            }

export default withStyles(styles)(Footer);