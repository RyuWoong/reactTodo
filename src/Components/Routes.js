import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import MainScreen from "../Screens/MainScreen";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={MainScreen} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
