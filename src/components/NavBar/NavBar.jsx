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
import ContactCV from "../Contact/Contact";
import Portfolio from "../PortFolio/Portfolio";
import "./NavBar.css";
import CV from "../CV/CV";

const NavBarCV = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBarContent">
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
                  <Link className="linkNavBar" to="/Portfolio">
                    Portfolio
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/Contact">
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <a
                    className="linkNavBar"
                    href="https://github.com/CzerwonyV/CzerwonyV/files/4658962/VictorVeyrierCV.pdf"
                    download
                  >
                    <p className="linkNavBarPDFDestock">Télécharger PDF</p>
                    <p className="linkNavBarPDFMobile">PDF</p>
                  </a>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText id="TextNavBar">Développement Web</NavbarText>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Contact">
            <ContactCV />
          </Route>
          <Route exact path="/">
            <CV />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBarCV;
