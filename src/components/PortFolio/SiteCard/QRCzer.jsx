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

const QRCzer = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://user-images.githubusercontent.com/57908921/85213523-df6dc700-b35f-11ea-9cc8-4122adc67ece.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <h4 className="TitleGroupCard">QR Czer</h4>
          </CardTitle>
          <CardText>
          Projet perso. Une application Web autour des QR Code afin de pouvoir en créer et en lire. Elle servira également à aider mes camarades sur les projets de la Wild Code School, qui utilise elle aussi les QR Code.          </CardText>
          <a
            href="https://qrczer.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="TitleGroupCard BtnPortfolio">Voir le site</Button>
          </a>
          <a
            href="https://github.com/CzerwonyV/QR-Czer"
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

export default QRCzer;
