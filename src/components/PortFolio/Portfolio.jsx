import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import WildPostCard from "./SiteCard/WildPostCard";
import BornInSpaceCard from "./SiteCard/BornInSpaceCard";
import AroundTheWorldCard from "./SiteCard/AroundTheWorldCard";
import "./Portfolio.css";
import QRCzer from "./SiteCard/QRCzer";

const Portfolio = props => {
  return (
    <div className="PortFolioBack">
    <ListGroup className="PortfolioContent">
      <ListGroupItem className="PortFolioCard" id="PortFolioCard1">
        <WildPostCard />
      </ListGroupItem>
      <ListGroupItem className="PortFolioCard">
        <AroundTheWorldCard />
      </ListGroupItem>
      <ListGroupItem className="PortFolioCard">
        <BornInSpaceCard />
      </ListGroupItem>
      <ListGroupItem className="PortFolioCard">
        <QRCzer />
      </ListGroupItem>
    </ListGroup>
    </div>
  );
};

export default Portfolio;
