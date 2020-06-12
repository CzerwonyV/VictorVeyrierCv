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

const BornInSpaceCard = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://user-images.githubusercontent.com/57908921/82382021-85f63d80-9a2b-11ea-816b-7522ff0dfed2.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <h4 className="TitleGroup">Born In Space</h4>
          </CardTitle>
          <CardText>
            Projet 2, de la Wild Code School. Réalisé du 6 Avril 2020 au 15 Mai
            2020. Equipe de 4 personnes. Fait avec JSReact, ReactStrap, CSS3. Le
            but était de réaliser une Application Web avec les API de la Nasa.
          </CardText>
          <a
            href="https://born-in-space.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="TitleGroup BtnPortfolio">Voir le site&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} id="logoGithubCV" /></Button>
          </a>
          <a
            href="https://github.com/CzerwonyV/reims-0320-js-space-at-home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button id="SpaceButton" className="TitleGroup BtnPortfolio">Voir le dépôt&nbsp;<FontAwesomeIcon icon={faGithub} id="logoGithubCV" /></Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default BornInSpaceCard;
