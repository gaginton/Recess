import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import GameDetails from "./components/games/details/GameDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateClub from "./components/games/create/CreateClub";
import CreateGame from "./components/games/create/CreateGame";
import CreateLeague from "./components/games/create/CreateLeague";
import Map from "./components/games/map/map";
import ProfileHome from "./components/dashboard/ProfileHome";
import RecessInfo from "./components/modals/RecessInfo";
import EditGame from "./components/games/edit/EditGame";

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
                        <Route exact path="/" component={Map} />
                        <Route exact path="/list" component={Dashboard} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/game/:id/edit" component={EditGame} />
                        <Route path="/game/:id" component={GameDetails} />
                        <Route path="/createClub" component={CreateClub} />
                        <Route path="/createGame" component={CreateGame} />
                        <Route path="/createLeague" component={CreateLeague} />
                        <Route path="/profile" component={ProfileHome} />
                        <Route path="/info" component={RecessInfo} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
