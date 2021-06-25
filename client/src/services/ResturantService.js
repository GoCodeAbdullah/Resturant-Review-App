import GenericServices from "./GenericService";
// import jwt_decode from "jwt-decode";

class ResturantService extends GenericServices {
  constructor() {
    super();
  }

  getResturant = () => this.get("resturant/");
  register = (name, description, city, address) =>
    this.post("resturant/", { name, description, city, address });
  getSingleResturant = (id) => this.get("resturant/" + id);
  giveReview = (id,rating,review)=>this.post("resturant/review/"+id,{id,rating,review})
}

let resturantService = new ResturantService();

export default resturantService;
