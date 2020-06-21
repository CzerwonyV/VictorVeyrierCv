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

const AroundTheWorldCard = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://user-images.githubusercontent.com/57908921/85213518-d5e45f00-b35f-11ea-933d-2a06d7a259c5.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <h4 className="TitleGroupCard">Around The World</h4>
          </CardTitle>
          <CardText>
            Hackathon 1, de la Wild Code School. Réalisé du 29 Avril 2020 au 30 Avril 2020. Equipe de 3 personnes. Fait avec JSReact, ReactStrap, CSS3. Le but était de réaliser une Application Web en 32H sur une API de WebCam.
          </CardText>
          <a
            href="https://around-the-world-hackathon.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="TitleGroupCard BtnPortfolio">Voir le site</Button>
          </a>
          <a
            href="https://github.com/CzerwonyV/reims-0320-js-around-the-world"
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

export default AroundTheWorldCard;
