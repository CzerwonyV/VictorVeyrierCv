import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import WildPostCard from "./SiteCard/WildPostCard";
import BornInSpaceCard from "./SiteCard/BornInSpaceCard";
import AroundTheWorldCard from "./SiteCard/AroundTheWorldCard";
import "./Portfolio.css";

const Portfolio = props => {
  return (
    <ListGroup>
      <ListGroupItem className="PortFolioContent">
        <WildPostCard />
      </ListGroupItem>
      <ListGroupItem className="PortFolioContent">
        <AroundTheWorldCard />
      </ListGroupItem>
      <ListGroupItem className="PortFolioContent">
        <BornInSpaceCard />
      </ListGroupItem>
    </ListGroup>
  );
};

export default Portfolio;
