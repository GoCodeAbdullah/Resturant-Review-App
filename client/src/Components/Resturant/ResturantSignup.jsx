import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import resturantService from "../../services/ResturantService";
import { Grid, TextField } from "@material-ui/core";

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

const ResturantSignup = (props) => {
  const classes = useStyles();
  const [name, setName] = React.useState("Abdullah");
  const [description, setDescription] = React.useState("amcas@b.com");
  const [city, setCity] = React.useState("Lahore");
  const [address, setAddress] = React.useState("aaa");
  return (
    <div style={{ backgroundColor: "#bbb" }}>
      <Grid container spacing={4} className={classes.grids}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <h1>Resturant Signup</h1>

          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            label="City"
            fullWidth
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <br />
          <TextField
            label="Address"
            fullWidth
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.login}
            onClick={(e) => {
              resturantService
                .register(name,description,city,address)
                .then((data) => {
                  console.log(data);
                  window.location.href ="/";
                })
                .catch((err) => {
                  console.log(err.response.data);
                });
            }}
          >
            Signup
          </Button>
          <br />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default ResturantSignup;
