import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
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
            href="https://born-in-space.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Voir Le site</Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default AroundTheWorldCard;
