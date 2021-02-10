import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/action.auth";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = ({ login, isAuthenticated }) => {
  const [loginData, SetLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  const { name, email, password } = loginData;

  const onChange = (e) =>
    SetLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    login(name, email, password);
  };

  //check authentication
  if (isAuthenticated) {
    return <Redirect to="/sample" />;
  }

  return (
    <div>
      <h1>Sign In to your account</h1>
      <form onSubmit={(e) => onSubmit(e)} className={classes.form}>
        <TextField
          type="text"
          placeholder="Your name here"
          name="name"
          autoComplete="on"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => onChange(e)}
        />
        <br />
        <TextField
          type="email"
          placeholder="Your email here"
          name="email"
          autoComplete="on"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => onChange(e)}
        />
        <br />
        <TextField
          type="password"
          placeholder="Your password here"
          name="password"
          autoComplete="on"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => onChange(e)}
        />
        <br />
        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
      </form>
      <br />
  
      <h6>
        Dont have account?<Link to="/signup">Create Account</Link>
      </h6>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
