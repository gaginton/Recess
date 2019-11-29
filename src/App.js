import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import GameDetails from "./components/games/GameDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateGame from "./components/games/CreateGame";
import Map from "./components/games/map";
import CreateLeague from "./components/games/CreateLeague";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/game/:id" component={GameDetails} />
            <Route exact path="/map" component={Map} />
            <Route path="/create" component={CreateGame} />
            <Route path="/createLeague" component={CreateLeague} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
