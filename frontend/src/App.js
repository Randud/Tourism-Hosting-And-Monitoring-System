import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Routes from "./utils/routing/Routes";

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./hoc/Layout";
import { check_authenticated } from "./actions/action.auth";
import setAuthToken from "./utils/setAuthToken";

import 'bootstrap/dist/css/bootstrap.min.css';
//Check the token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //Setting up token
  useEffect(() => {
    store.dispatch(check_authenticated());
    // eslint-disable-next-line
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route component={Routes} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
