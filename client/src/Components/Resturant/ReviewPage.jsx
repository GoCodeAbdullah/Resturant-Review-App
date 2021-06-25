import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import resturantService from "../../services/ResturantService";

const ReviewPage = (props) => {
  const [rating, setRating] = React.useState();
  const [review, setReview] = React.useState();
  const id = props.match.params.id;

  const submitReview = () => {
    resturantService
      .giveReview(id, rating, review)
      .then((data) => {
        console.log(data);
        window.location.href = "/returant/review/" + id;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <select
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
        }}
        style={{ width: "100px", height: "50px" }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <TextField
        label="Comments"
        onChange={(e) => {
          setReview(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          submitReview();
        }}
      >
        Review
      </Button>
    </div>
  );
};

export default ReviewPage;
