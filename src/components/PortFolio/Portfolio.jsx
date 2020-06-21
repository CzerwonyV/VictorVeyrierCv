import React from "react";
import WildPostCard from "./SiteCard/WildPostCard";
import BornInSpaceCard from "./SiteCard/BornInSpaceCard";
import AroundTheWorldCard from "./SiteCard/AroundTheWorldCard";
import "./Portfolio.css";
import QRCzer from "./SiteCard/QRCzer";

const Portfolio = props => {
  return (
    <div className="PortFolioContent">
      <div>
        <WildPostCard />
        <AroundTheWorldCard />
      </div>
      <div>
        <BornInSpaceCard />
        <QRCzer />
      </div>
    </div>
  );
};

export default Portfolio;
