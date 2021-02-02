import React from "react";
import Cards from "./SiteCard/Card";
import TwitterTimeline from "react-twitter-embedded-timeline";
import NavBarCV from "../NavBar/NavBar";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <NavBarCV />
      <div className="PortFolioContent">
        <div className="ActuContent">
          <div className="ActuGauche">
            <p className="TextActu">Je suis à la recherche d'un emploi de développeur dans la région parisienne ou dans la Marne (Châlons, Reims). Je suis très motivé et aurai à cœur de m'investir dans le travail qui me sera confié.</p>
          </div>
          <div className="ActuDroite">
            <TwitterTimeline widgetId="TLContent" user="CzerwonyV" width="400" height="400" />
          </div>
        </div>
          <Cards/>
      </div>
    </>
  );
};

export default Portfolio;
