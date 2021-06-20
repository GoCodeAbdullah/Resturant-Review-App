import TopMenu from "./Components/TopMenu";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";


function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu/>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
