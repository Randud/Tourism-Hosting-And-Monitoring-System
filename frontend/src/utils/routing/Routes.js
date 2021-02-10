import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Users from "../../pages/Users";
import Activated from "../../pages/Activated";
import MainPage from "../../pages/Mainpage";
import InquiryEdit from "../../components/InquiryEdit";


const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/activated" component={Activated} />
        <Route exact path="/MainPage" component={MainPage} />
        <Route exact path="/InquiryEdit/:id" component={InquiryEdit} />
        <PrivateRoute exact path="/MainPage" component={MainPage} />
      </Switch>
    </div>
  );
};

export default Routes;
