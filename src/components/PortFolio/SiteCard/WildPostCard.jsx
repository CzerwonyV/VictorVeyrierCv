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

const WildPostCard = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://user-images.githubusercontent.com/57908921/81009918-c4013800-8e55-11ea-8944-e3b4d0a85c6d.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <h4>WildPost</h4>
          </CardTitle>
          <CardText>
            Projet 1, de la Wild Code School. Realisé du 09/03/2020 au
            27/03/2020. En équipe de 4 personnes. Fait avec : HTML5, CSS3 et un
            peu de JS. Le but était de realiser un site statique d'un journal
            sur la WildCodeSchool.
          </CardText>
          <a
            href="https://angelique-m08.github.io/Wild-post/"
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

export default WildPostCard;
