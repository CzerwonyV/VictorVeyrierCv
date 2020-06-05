import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const AroundTheWorldCard = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://user-images.githubusercontent.com/57908921/82511913-cbd80200-9b0e-11ea-8750-d66dd17ab036.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <h4>Around The World</h4>
          </CardTitle>
          <CardText>
            Hackathon 1, de la Wild Code School. Réalisé du 29 Avril 2020 au 30 Avril 2020. Equipe de 3 personnes. Fait avec JSReact, ReactStrap, CSS3. Le but était de réaliser une Application Web en 32H sur une API de WebCam.
          </CardText>
          <a
            href="https://around-the-world-hackathon.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Voir le site&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} id="logoGithubCV" /></Button>
          </a>
          <a
            href="https://github.com/CzerwonyV/reims-0320-js-around-the-world"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button id="SpaceButton">Voir le dépôt&nbsp;<FontAwesomeIcon icon={faGithub} id="logoGithubCV" /></Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default AroundTheWorldCard;
