import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import userService from "../services/UserService";

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: "none",
    color: "white",
    paddingRight : "20px",
  },
  grids:{
      display:"flex",
      alignItems: "center"
  },
  buttonColor:{
    color:"white"
  }

}));

const SignButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.grids}>
      

      {!userService.isLoggedIn() ? (
            <>
              <Link to="/login" className={classes.links}>
                Login
              </Link>
              <Link to="/register"  classes={classes.links}>
                <Button variant="contained" color="primary" classes={classes.button}>
                  Register
                </Button>
              </Link>
              
            </>
          ) : (
            <Button className={classes.buttonColor}  onClick={()=>{
                userService.logout();
                window.location.reload();
            }}>Logout 
            
            </Button>
            
          )}
          
    </div>
  );
};

export default SignButtons;
