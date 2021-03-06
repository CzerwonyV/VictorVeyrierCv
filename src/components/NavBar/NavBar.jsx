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
import { Link } from "react-router-dom";
import ContactDestock from "../Contact/ContactDestock";
import BtnGithub from "../Btn/BtnGithub";
import BtnLinkedin from "../Btn/BtnLinkedin";
import BtnTwitter from "../Btn/BtnTwitter";
import "./NavBar.css";

const NavBarCV = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBarBack">
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
                  href="https://github.com/CzerwonyV/CzerwonyV/files/4878259/VictorVeyrier.pdf"
                  download
                >
                  <p className="linkNavBarPDFMobile">CV en format PDF</p>
                </a>
              </NavLink>
            </NavItem>
          </Nav>
          <NavItem className="IconNav">
            <BtnTwitter />
          </NavItem>
          <NavItem className="IconNav">
            <BtnLinkedin />
          </NavItem>
          <NavItem className="IconNav">
            <BtnGithub />
          </NavItem>
          <NavbarText id="TextNavBar">Développement Web</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarCV;
