import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import './Btn.css';

const BtnTwitter = () => {
  return (
    <div>
      <Button color="link" className="BtnLinkedinNav">
        <a
          href="https://twitter.com/CzerwonyV"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faTwitter} className="IconBackground"/>
        </a>
      </Button>
    </div>
  );
};

export default BtnTwitter;
