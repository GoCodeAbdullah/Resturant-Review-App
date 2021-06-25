import { Grid } from "@material-ui/core";
import React from "react";
import resturantService from "../../services/ResturantService";
import SingleRest from "./SingleRest";

const Resturants = () => {
  const [resturants, setResturant] = React.useState([]);

  const getData = () => {
    resturantService
      .getResturant()
      .then((data) => {
        setResturant(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, []);

  return (
    <div>
      <h1>Resturants</h1>

      {resturants.length === 0 ? (
        <p>There is not any Resturants</p>
      ) : (
        <Grid container spacing={3}>
          {resturants.map((rest, index) => (
            <SingleRest key={index} resturant={rest} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Resturants;
