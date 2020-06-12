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
            <h4 className="TitleGroup">WildPost</h4>
          </CardTitle>
          <CardText>
            Projet 1, de la Wild Code School. Realisé du 09/03/2020 au
            27/03/2020. En équipe de 4 personnes. Fait avec : HTML5, CSS3 et un
            peu de JS. Le but était de realiser un site statique d'un journal
            sur la WildCodeSchool.
          </CardText>
          <a
            href="https://czerwonyv.github.io/Wild-post/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="TitleGroup">Voir le site&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} id="logoGithubCV" /></Button>
          </a>
          <a
            href="https://github.com/CzerwonyV/Wild-post"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button id="SpaceButton" className="TitleGroup">Voir le dépôt&nbsp;<FontAwesomeIcon icon={faGithub} id="logoGithubCV" /></Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default WildPostCard;
