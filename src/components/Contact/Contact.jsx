import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import {
  faEnvelope,
  faFolder,
  faMobile
} from "@fortawesome/free-solid-svg-icons";

const ContactCV = props => {
  return (
    <>
      <ListGroup>
        <ListGroupItem className="ListGroupItem">
          <a
            href="https://fr.linkedin.com/in/victor-veyrier-ab6948194"
            target="_blank"
            rel="noopener noreferrer"
            className="TextContact"
          >
            Linkedin&nbsp;
            <FontAwesomeIcon icon={faLinkedin} id="logoLinkedin" />
          </a>
        </ListGroupItem>
        <ListGroupItem className="ListGroupItem">
          <a
            href="https://github.com/CzerwonyV"
            target="_blank"
            rel="noopener noreferrer"
            className="TextContact"
          >
            GitHub&nbsp;
            <FontAwesomeIcon icon={faGithubSquare} id="logoGithub" />
          </a>
        </ListGroupItem>
        <ListGroupItem className="ListGroupItem">
          <a
            href="https://codesandbox.io/u/CzerwonyV/sandboxes"
            target="_blank"
            rel="noopener noreferrer"
            className="TextContact"
          >
            Sandboxes&nbsp;
            <FontAwesomeIcon icon={faFolder} />
          </a>
        </ListGroupItem>
        <ListGroupItem className="ListGroupItem">
          victor.veyrier@icloud.com&nbsp;
          <FontAwesomeIcon icon={faEnvelope} />
        </ListGroupItem>
        <ListGroupItem className="ListGroupItem" id="ListGroupItemLast">
          06 04 19 79 97&nbsp;
          <FontAwesomeIcon icon={faMobile} />
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default ContactCV;
