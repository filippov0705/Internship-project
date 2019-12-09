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
    fontSize: '14px',
    color: 'white'
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
                height: '130px' }}>
                <Typography 
                  component="div" 
                  style={{width: '100%', 
                  maxWidth: '1200px', 
                  height: '130px',
                  display: 'flex',
                  alignItems: 'center'
                  }} >
                    <Grid container>
                      <Grid item xs={4}   className={classes.columnGrid}>
                        <img src={FooterLogo} alt="logo" style={{width: '150px'}} />
                        <span>&#169; 2019 :iTechArt All Rights Reserved.</span>
                      </Grid>
                      <Grid item xs={4} className={classes.columnGrid}>
                        <span>Телефоны:</span>
                        <span>+375 33 38 76 163</span>
                        <span>+375 29 15 71 703</span>
                      </Grid>
                      <Grid item xs={4} className={classes.columnGrid}>
                        <span>E-mail:</span>
                        <a href="mailto:careers@itechart-group.com">careers@itechart-group.com</a>
                        <span>Старт карьеры:</span>
                        <a href="mailto:st.lab@itechart-group.com">st.lab@itechart-group.com</a>
                        <span>Сотрудничество:</span>
                        <a href="mailto:pr@itechart-group.com">pr@itechart-group.com</a>
                      </Grid>
                    </Grid>
                </Typography>
            </Container>
          </React.Fragment>
        )
                            }

export default withStyles(styles)(Footer);