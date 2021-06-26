import { Grid } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarIcon from '@material-ui/icons/Star';
const useStyles = makeStyles({
  root: {
    minWidth: 200,
    background: "#444",
    color: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: "#aaa",
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  button:{
    marginTop: "15px",
  },
  star:{
    color:"yellow",
    padding:"0px"
  }
});

const SingleRest = ({ resturant }) => {
  const classes = useStyles();
  // const [rating,setRating] = React.useState(0);
  let rating=0;
  let count = 0;
  let tempRating=0;

  resturant.reviews.map((rest)=>{
    tempRating = tempRating+rest.rating;
    ++count;
    rating=tempRating/count;
  })

  
  return (
    <Grid item xs={4}>
      {/* //   
      //   <p>{resturant.description}</p>
      //   City: <p>{resturant.city}</p>
      //   Address: <p>{resturant.address}</p> */}
      <Link className={classes.link} to={"/resturant/" + resturant._id}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {resturant.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              City: {resturant.city}
            </Typography>
            <Typography variant="body2" component="p">
              Rating: {rating} <StarIcon className={classes.star}/>
             
            </Typography>

            <Button variant="contained" color="primary" className={classes.button}>
              <Link className={classes.link} to={"/resturant/" + resturant._id}>
                Learn More
              </Link>
            </Button>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default withRouter(SingleRest);
