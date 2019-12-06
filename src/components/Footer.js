import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default class Footer extends React.Component {
    render() {
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
                      <Grid item xs={3}  style={{backgroundColor: 'green'}}>
                        
                      </Grid>
                      <Grid item xs={3}  style={{backgroundColor: 'green'}}>asdasd</Grid>
                      <Grid item xs={3}  style={{backgroundColor: 'green'}}>asdasd</Grid>
                      <Grid item xs={3}  style={{backgroundColor: 'green'}}>asdasd</Grid>
                    </Grid>
                </Typography>
            </Container>
          </React.Fragment>
        );
    }
}