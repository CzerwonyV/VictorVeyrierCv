import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import WildPostCard from "./SiteCard/WildPostCard";
import BornInSpaceCard from "./SiteCard/BornInSpaceCard";
import AroundTheWorldCard from "./SiteCard/AroundTheWorldCard";
import "./Portfolio.css";

const Portfolio = props => {
  return (
    <div className="PortFolioBack">
    <ListGroup>
      <ListGroupItem className="PortFolioContent" id="PortFolioContent1">
        <WildPostCard />
      </ListGroupItem>
      <ListGroupItem className="PortFolioContent">
        <AroundTheWorldCard />
      </ListGroupItem>
      <ListGroupItem className="PortFolioContent">
        <BornInSpaceCard />
      </ListGroupItem>
    </ListGroup>
    </div>
  );
};

export default Portfolio;
