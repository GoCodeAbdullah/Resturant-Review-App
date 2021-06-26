import React from "react";
import resturantService from "../../services/ResturantService";
import userService from "../../services/UserService";

const Resturant = (props) => {
  const id = props.match.params.id;
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  React.useEffect(() => {
    resturantService
      .getSingleResturant(id)
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {name} <br />
      {description} <br />
      {userService.isLoggedIn() ? (
        <a href={"/resturant/review/" + id}>Give us Review</a>
      ) : (
        <p>
          Please Login first to give Review 
          <a href={"/login"}>Login</a>
        </p>
      )}
    </div>
  );
};

export default Resturant;
