import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: "none",
    color: "white",
    paddingRight : "20px",
  },
  grids:{
      display:"flex",
      alignItems: "center"
  }

}));

const SignButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.grids}>
      <Link to="/login" className={classes.links}>
        Login
      </Link>
      <Link to="/register"  classes={classes.links}>
        <Button variant="contained" color="primary" classes={classes.button}>
          Register
        </Button>
      </Link>
    </div>
  );
};

export default SignButtons;
