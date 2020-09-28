import React from "react";
import WildPostCard from "./SiteCard/WildPostCard";
import BornInSpaceCard from "./SiteCard/BornInSpaceCard";
import AroundTheWorldCard from "./SiteCard/AroundTheWorldCard";
import TwitterTimeline from "react-twitter-embedded-timeline";
import QRV from "./SiteCard/QRV";
import BtnActu from "../Btn/BtnActu";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="PortFolioContent">
        <div className="ActuContent">
          <div className="ActuGauche">
            <BtnActu />
            <p className="TextActu">Je suis à la recherche d'un emploi de développeur à partir du 27 novembre dans la région parisienne ou dans la Marne (Châlons, Reims). Je suis très motivé et aurai à cœur de m'investir dans le travail qui me sera confié.</p>
            <p className="TextActu">Je suis actuellement en stage dans la start-up Trott depuis le 3 août et jusqu'aux 27 novembre.</p>
          </div>
          <div className="ActuDroite">
            <TwitterTimeline widgetId="TLContent" user="CzerwonyV" width="400" height="400" />
          </div>
        </div>
        <div className="PortFolioContentCard">
          <WildPostCard />
          <AroundTheWorldCard />
          <BornInSpaceCard />
          <QRV />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
