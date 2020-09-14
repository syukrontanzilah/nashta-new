import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./components/Home";
import Form from "./containers/Form";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/add" component={Form} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
