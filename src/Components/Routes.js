import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import MainScreen from "../Screens/MainScreen";
import HistoryScreen from "../Screens/HistoryScreen";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/history' component={HistoryScreen} />
        <Route path='/' component={MainScreen} />
      </Switch>
    </Router>
  );
}

export default Routes;
