import React from "react";
import { render } from "react-dom";
import NavBar from "./navBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./main";
import Ocean from "./ocean";
import Galaxy from "./galaxy";
import Grass from "./grass";

function App() {
  return (
    <div sx={{ fontFamily: "Roboto Condensed" }}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/ocean" component={Ocean} />
        <Route exact path="/galaxy" component={Galaxy} />
        <Route exact path="/grass" component={Grass} />
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
