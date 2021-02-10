/* eslint-disable quotes */
import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { check_authenticated } from '../actions/action.auth';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random?Sri_lanka)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(6, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

}));

const Layout = (props) => {
  useEffect(() => {
    props.check_authenticated();
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
       <div style={{
                 display:'flex',
                 flexDirection:'column',
                 justifyContent:'center',
                 marginTop:250,
       }}>
        <h3
          style={{
            color: 'white',
            fontSize: '75px',
            textShadow: '2px 2px 1px #111111',
            fontFamily: 'Marck Script',
            textAlign:'center'
          }}
        >
         Welcome to Sri Lanka..
        </h3>
        <p style={{ color: 'white',fontSize: '20px',
            textShadow: '1px 1px 1px #111111',textAlign:'center' }}>Tourism Disaster Monitoring and Hosting Program</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

       
          <div className="containerMain">
              <Navbar />
              </div>
              {props.children}
    
        </div>
      </Grid>
    </Grid>
  );
};

export default connect(null, { check_authenticated})(Layout);