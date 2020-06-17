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

const QRCzer = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://user-images.githubusercontent.com/57908921/84950135-af6bbd00-b0ee-11ea-8a86-590776f45702.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <h4 className="TitleGroup">QR Czer</h4>
          </CardTitle>
          <CardText>
          Projet perso. Une application Web autour des QR Code afin de pouvoir en créer et en lire. Elle servira également à aider mes camarades sur les projets de la Wild Code School, qui utilise elle aussi les QR Code.          </CardText>
          <a
            href="https://qrczer.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="TitleGroup BtnPortfolio">Voir le site&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} id="logoGithubCV" /></Button>
          </a>
          <a
            href="https://github.com/CzerwonyV/QR-Czer"
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

export default QRCzer;
