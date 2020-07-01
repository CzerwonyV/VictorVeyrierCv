import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CV from './components/CV/CV';
import ContactMobile from './components/Contact/ContactMobile';
import Portfolio from './components/PortFolio/Portfolio';

export default function App() {
  return (
    <div className="AppContent">
      <Router>
        <Switch>
          <Route path="/CV">
            <CV />
          </Route>
          <Route path="/Contact">
            <ContactMobile />
          </Route>
          <Route exact path="/">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
