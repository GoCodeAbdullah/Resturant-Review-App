import React from "react";
import resturantService from "../../services/ResturantService";

const Resturant = (props) => {
  const id = props.match.params.id;
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
 

  React.useEffect(()=>{
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
      {name}
      {description}
      <a href={"/resturant/review/"+id}>Give us Review</a>
      
    </div>
  );
};

export default Resturant;
