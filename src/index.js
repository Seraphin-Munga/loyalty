import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/account/login";
import DashboardLoyout from "./components/layout/dashboard";
import Dashboard from "./components/dashboard/dashboard";
import Store from "./components/store/store";
import Create from "./components/store/create";
import Loyalty from "./components/loyalty/loyalty";
import Create_loyalty from "./components/loyalty/create";
import Subscribe from "./components/loyalty/subscribe";
import Balance from "./components/loyalty/balance";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
          <DashboardLoyout />
        </Route>
        <Route path="/store">
          <Store />
          <DashboardLoyout />
        </Route>
        <Route path="/create">
          <Create />
          <DashboardLoyout />
        </Route>
        <Route path="/loyalty">
          <Loyalty />
          <DashboardLoyout />
        </Route>
        <Route path="/create-loyalty">
          <Create_loyalty />
          <DashboardLoyout />
        </Route>
        <Route path="/subscribe/:phoneNumber">
          <Subscribe />
          <DashboardLoyout />
        </Route>
        <Route path="/balance/:phoneNumber/:account_id">
          <Balance />
          <DashboardLoyout />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
