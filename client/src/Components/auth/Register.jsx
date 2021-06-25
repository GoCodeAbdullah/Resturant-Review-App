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

const Register = (props) => {
  const classes = useStyles();
  const [name, setName] = React.useState("Abdullah");
  const [email, setEmail] = React.useState("amcas@b.com");
  const [password, setPassword] = React.useState("aaa");
  const [phone, setPhone] = React.useState(332211);
  return (
    <div style={{ backgroundColor: "#bbb" }}>
      <Grid container spacing={4} className={classes.grids}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <h1>Register</h1>

          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Phone"
            fullWidth
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
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
                .register(name,email, password,phone)
                .then((data) => {
                  console.log(data);
                  window.location.href ="/";
                })
                .catch((err) => {
                  console.log(err.response.data);
                });
            }}
          >
            Register
          </Button>
          <br />

          <p className={classes.small}>
            Already have account? <a href="/login">Login now</a>
          </p>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Register;
