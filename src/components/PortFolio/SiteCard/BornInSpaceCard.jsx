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
import "./Card.css";

const BornInSpaceCard = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://user-images.githubusercontent.com/57908921/85213522-da107c80-b35f-11ea-8c1f-b15d746370a0.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <h4 className="TitleGroupCard">Born In Space</h4>
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
            <Button className="TitleGroupCard BtnPortfolio">Voir le site</Button>
          </a>
          <a
            href="https://github.com/CzerwonyV/reims-0320-js-space-at-home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button id="SpaceButton" className="TitleGroupCard BtnPortfolio"><FontAwesomeIcon icon={faGithub} id="logoGithubCard" /></Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default BornInSpaceCard;
