import { Grid } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleRest = ({ resturant }) => {
  return (

      <Grid item xs={4}>
        <Link to={"/resturant/"+resturant._id}><h2>{resturant.name}</h2></Link>
        <p>{resturant.description}</p>
        City: <p>{resturant.city}</p>
        Address: <p>{resturant.address}</p>
      </Grid>

  );
};

export default withRouter(SingleRest);
