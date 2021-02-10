import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";
import Sample from "../../pages/Sample";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Users from "../../pages/Users";
import Activated from "../../pages/Activated";
import MainPage from "../../pages/mainpage";


const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/activated" component={Activated} />
        <Route exact path="/MainPage" component={MainPage} />
        <PrivateRoute exact path="/Sample" component={Sample} />
      </Switch>
    </div>
  );
};

export default Routes;
