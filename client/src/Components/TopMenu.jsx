import { AppBar, Grid, Toolbar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../logo.svg";
import SignButtons from "./SignButtons";
const useStyles = makeStyles((theme) => ({
  appBar: {
    background:"#333"
  },
  logoImg: {
    width: "100px",
  },
  gridRight:{
      display:"flex",
      justifyContent:"center"
  }
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={3} >
            <Grid item xs={6} >
              <img
                src={logo}
                className="App-logo"
                alt="logo"
                className={classes.logoImg}
              />
            </Grid>
            <Grid item xs={6} className={classes.gridRight}>
                <SignButtons/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
