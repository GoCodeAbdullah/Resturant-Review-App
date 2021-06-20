import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import logo from "../../logo.svg";
import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: "5px",
  },
  grids: {
    display: "flex",
    alignItems: "center",
    height: "90vh",
  },
  small: {
    marginTop: "50px",
  },
  logoDiv: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("amcas@b.com");
  const [password, setPassword] = React.useState("aaa");
  return (
    <div style={{ backgroundColor: "#bbb" }}>
      <Grid container spacing={4} className={classes.grids}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <div className={classes.logoDiv}>
            <img src={logo} className="App-logo" alt="logo" width="120" />
          </div>

          <TextField
            label="Name"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.login}
            onClick={(e) => {
              userService
                .login(email, password)
                .then((data) => {
                  console.log(data);
                  window.location.href ="/";
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Login
          </Button>
          <br />

          <p className={classes.small}>
            Not have account? <a href="/register">Register now</a>
          </p>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Login;
