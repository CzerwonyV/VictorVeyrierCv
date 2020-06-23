import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import '../NavBar.css';

const BtnGithub = () => {
  return (
    <div>
      <Button color="link">
        <a
          href="https://github.com/CzerwonyV"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faGithub} className="IconBackground"/>
        </a>
      </Button>
    </div>
  );
};

export default BtnGithub;
