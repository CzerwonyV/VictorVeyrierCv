import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import ContactMobile from "./components/Contact/ContactMobile";
import Portfolio from "./components/PortFolio/Portfolio";
import CV from "./components/CV/CV";

export default function App() {
  return (
    <div className="AppContent">
      <Router>
        <Switch>
          <Route path="/CV" component={CV}/>
          <Route path="/Contact" component={ContactMobile}/>
          <Route exact path="/" component={Portfolio}/>
        </Switch>
      </Router>
    </div>
  );
}
