import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/login";
import EmployeeList from "./components/employeeList";
import PrivateRoute from "./containers/authentication/privateRoute";

import configureFakeBackend from "./helpers/fakeBackend";
configureFakeBackend();

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/employee-details" component={EmployeeList} />
  </Switch>
);

export default Routes;
