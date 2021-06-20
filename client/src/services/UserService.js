import GenericServices from "./GenericService";
// import jwt_decode from "jwt-decode";

class UserService extends GenericServices {
  constructor() {
    super();
  }

  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });
  register = (name, email, password,phone) =>
    this.post("users/signup", { name, email, password, phone });
  // logout = () => {
  //   localStorage.removeItem("token");
  // };

//   isLoggedIn = () => {
//     return localStorage.getItem("token") ? true : false;
//   };

//   getLoggedinUser = () => {
//     try {
//       const jwt = localStorage.getItem("token");
//       return jwt_decode(jwt);
//     } catch (ex) {
//       return null;
//     }
//   };
//   isAdmin = () => {
//     if (this.isLoggedIn()) {
//       if (this.getLoggedinUser().role == "Admin") return true;
//       else return false;
//     } else return false;
//   };
}

let userService = new UserService();

export default userService;
