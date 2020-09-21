import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history/history";
import Users from "./components/Users";
import UsersHooks from "./components/UsersHooks";

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/users" component={Users}></Route>
          <Route exact path="/usershooks" component={UsersHooks}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
