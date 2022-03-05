import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import NavBar from "./navBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./main";
import Sunset from "./sunset";
import Forest from "./forest";

function App() {
  return (
    <div sx={{ fontFamily: "Roboto Condensed" }}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/ocean" component={Sunset} />
        <Route exact path="/forest" component={Forest} />
      </Switch>
    </div>
  );
}
render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
