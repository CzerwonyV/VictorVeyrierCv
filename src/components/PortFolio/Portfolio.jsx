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
            <p className="TextActu">Je suis disponible et très motivé pour un stage de 4 mois à partir du 3 août dans la région parisienne, dans la Marne (Châlons,Reims).</p>
            <p className="TextActu">Projet 3 à la WildCodeSchool Tonton Sommelier. Réalisé du 25 Mai 2020 au 31 Juillet 2020. Equipe de 4 personnes. Fait avec ReactJS, ReactStrap, CSS3, NodeJs, ExpressJs. Le but est de réaliser une Application Web autour de la dégustation du vin avec la du client Tonton Sommelier.</p>
            <p className="TextActu" id="TextActuBottom">Je suis actuellement en Formation développeur Full Stack en 5 Mois à la Wild Code School de Reims.</p>
          </div>
          <div className="ActuDroite">
            <TwitterTimeline widgetId="TLContent" user="CzerwonyV" width="400" height="400" />
          </div>
        </div>
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
    </>
  );
};

export default Portfolio;
