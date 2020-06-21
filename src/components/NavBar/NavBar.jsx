import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Portfolio from "../PortFolio/Portfolio";
import "./NavBar.css";
import CV from "../CV/CV";
import ContactMobile from "../Contact/ContactMobile";
import ContactDestock from "../Contact/ContactDestock";

const NavBarCV = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBarBack">
      <Router>
        <Navbar className="NavBarContent" light expand="md">
          <NavbarBrand>
            <Link className="linkTitleNavBar" to="/">
              Victor Veyrier
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/CV">
                    CV
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="ContactMobil">
                  <Link className="linkNavBar" to="/Contact">
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="ContactDestock"  className="linkNavBar">
                <ContactDestock />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <a
                    className="linkNavBar"
                    href="https://github.com/CzerwonyV/CzerwonyV/files/4765663/VictorVeyrier.pdf"
                    download
                  >
                    <p className="linkNavBarPDFDestock">Télécharger mon CV</p>
                    <p className="linkNavBarPDFMobile">CV en format PDF</p>
                  </a>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText id="TextNavBar">Développement Web</NavbarText>
          </Collapse>
        </Navbar>
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
};

export default NavBarCV;
