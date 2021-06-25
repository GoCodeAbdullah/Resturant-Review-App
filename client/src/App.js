import TopMenu from "./Components/TopMenu";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import ResturantSignup from "./Components/Resturant/ResturantSignup";
import Resturants from "./Components/Resturant/Resturants";
import Resturant from "./Components/Resturant/Resturant";
import LandingPage from "./Components/LandingPage";
import ReviewPage from "./Components/Resturant/ReviewPage";


function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu/>
        <div >
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/resturant/signup" component={ResturantSignup} />
          <Route path="/resturant/review/:id" component={ReviewPage} />
          <Route path="/resturant/:id" component={Resturant} />
          <Route path="/resturant" component={Resturants} />
          <Route path="/" exact component={LandingPage} />

          <Redirect to="/" />
        </Switch>
        </div>

        
      </div>
    </Router>
  );
}

export default App;
