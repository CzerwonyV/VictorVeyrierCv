import React from "react";
import WildPostCard from "./SiteCard/WildPostCard";
import BornInSpaceCard from "./SiteCard/BornInSpaceCard";
import AroundTheWorldCard from "./SiteCard/AroundTheWorldCard";
import "./Portfolio.css";
import QRV from "./SiteCard/QRV";

const Portfolio = props => {
  return (
    <div className="PortFolioContent">
      <div className="PortFolioContentCard">
        <div>
          <WildPostCard />
          <AroundTheWorldCard />
        </div>
        <div>
          <BornInSpaceCard />
          <QRV />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
