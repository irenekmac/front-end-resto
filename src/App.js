import React from "react";
import logo from "./logo.svg";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp.jsx";
import LogIn from "./components/LogIn.jsx";
import RestaurantNew from "./components/RestaurantNew";
import RestaurantInfo from "./components/RestaurantInfo";
import Gmap from "./components/Gmap";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/front-end-resto/">
        <div className="App">
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/restaurant-new" component={RestaurantNew} />
            <Route exact path="/map" component={Gmap} />
            <Route path="/front-end-resto/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
