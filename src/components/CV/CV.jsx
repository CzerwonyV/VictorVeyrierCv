import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faAws,
  faWindows,
  faLinux,
  faApple
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFolder,
  faMobile
} from "@fortawesome/free-solid-svg-icons";
import "./CV.css";
import BtnDL from "../Btn/BtnDL";
import NavBarCV from "../NavBar/NavBar";

const CV = () => {
  return (
    <>
      <NavBarCV />
      <div className="CVContent">
        <div className="LeftPart">
          <div className="TextGroup">
            <p className="TextMotivDestock">
              Je suis à la recherche d'un emploi de développeur dans la région parisienne ou dans la Marne (Châlons, Reims). Je suis très motivé et aurai à cœur de m'investir dans le travail qui me sera confié.
            </p>
            <h2 className="TitleGroup">COMPETENCES</h2>
            <p>
              <p className="TitleInText">Compétences Développement&nbsp;:</p>
              - HTML5&nbsp;
              <FontAwesomeIcon icon={faHtml5} id="logoHTML" />
              &nbsp;|&nbsp;CSS3&nbsp;
              <FontAwesomeIcon icon={faCss3Alt} id="logoCSS3" />
              <br />- JavaScript&nbsp;
              <FontAwesomeIcon icon={faJsSquare} id="logoJS" />
              <br />- React (JSX)&nbsp;
              <FontAwesomeIcon icon={faReact} id="logoReact" />
              <br />- React-Native&nbsp;
              <FontAwesomeIcon icon={faReact} id="logoReact" />
              <br />- NodeJS&nbsp;
              <FontAwesomeIcon icon={faNodeJs} id="logoNodeJS" />
              <br />- AWS&nbsp;
              <FontAwesomeIcon icon={faAws} id="logoAWS" />
              <br />- Bootstrap&nbsp;(Reactstrap)&nbsp;
              <FontAwesomeIcon icon={faBootstrap} id="logoBootstrap" />
              <br />- Git&nbsp;
              <FontAwesomeIcon icon={faGitAlt} id="logoGit" />
              &nbsp;|&nbsp;GitHub&nbsp;
              <FontAwesomeIcon icon={faGithubSquare} id="logoGithub" />
              <br />- ExpressJS
              <br />- Rest
              <br />- GraphQL
              <br />- Redux
              <br />- Styled-Components
              <br />-&nbsp;
              <FontAwesomeIcon icon={faWindows} className="WLA" />
              &nbsp;
              <FontAwesomeIcon icon={faLinux} className="WLA" />
              &nbsp;
              <FontAwesomeIcon icon={faApple} className="WLA" />
              <p className="TitleInText" id="GeneralSkill">
                Compétences Générales&nbsp;:
              </p>
              - Travail En Equipe
              <br />- Organisation
              <br />- Créativité
              <br />- Méthode Scrum
            </p>
          </div>
          <div className="TextGroup">
            <h2 className="TitleGroup">CENTRES D'INTERET</h2>
            <p>
              - Sport(Football,NBA,F1)
              <br />- Jeux Vidéo
              <br />- VTT
              <br />- Application Mobile
              <br />- Start-up
              <br />- High tech
            </p>
          </div>
          <div className="TextGroup">
            <h2 className="TitleGroup">LANGUES</h2>
            <p>Anglais : Niveau Intermédiaire</p>
          </div>
          <div className="TextGroup">
            <h2 className="TitleGroup">CONTACT</h2>
            <div>
              <a
                href="https://fr.linkedin.com/in/victor-veyrier-ab6948194"
                target="_blank"
                rel="noopener noreferrer"
                className="TextContactCV"
              >
                Linkedin&nbsp;
                <FontAwesomeIcon icon={faLinkedin} id="logoLinkedinCV" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/CzerwonyV"
                target="_blank"
                rel="noopener noreferrer"
                className="TextContactCV"
              >
                GitHub&nbsp;
                <FontAwesomeIcon icon={faGithubSquare} id="logoGithubCV" />
              </a>
            </div>
            <div>
              <a
                href="https://codesandbox.io/u/CzerwonyV/sandboxes"
                target="_blank"
                rel="noopener noreferrer"
                className="TextContactCV"
              >
                Sandboxes&nbsp;
                <FontAwesomeIcon icon={faFolder} />
              </a>
            </div>
            <div>
              <a href="mailto:victor.veyrier@icloud.com" className="TextContactCV">victor.veyrier@icloud.com&nbsp;<FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <div>
              06 04 19 79 97&nbsp;
              <FontAwesomeIcon icon={faMobile} />
            </div>
          </div>
        </div>
        <div className="RigthPart">
          <div className="TextGroup">
            <p className="TextMotivMobil">
              Je suis à la recherche d'un emploi de développeur dans la région parisienne ou dans la Marne (Châlons, Reims). Je suis très motivé et aurai à cœur de m'investir dans le travail qui me sera confié.
            </p>
            <h2 className="TitleGroup TitleProject">PROJET WEB<BtnDL /></h2>
            <p className="RigthPartText">
              <p className="TitleInText">
                Trott | Trott/Innovact
              </p>
              Participation au projet du 3 août au 27 Novembre 2020. Equipe de 5 personnes.
              Fait avec React-Native, Styled-Components, NodeJs, AWS, GraphQl. Le but était de réaliser une
              Application Mobile en React-Native à partir d'un application web en React.
              <p className="TitleInText">
                DoctoPills | WildCodeSchool/Doctolib
              </p>
              Réalisé du 24 au 26 Juin 2020. Equipe de 4 personnes.
              Fait avec ReactJS, ReactStrap, CSS3, NodeJs, ExpressJs. Le but était de réaliser une
              Application Web en 53H pour remplacer un pilulier.
              <p className="TitleInText">
                Tonton Sommelier | WildCodeSchool
              </p>
              Réalisé du 25 Mai 2020 au 31 Juillet 2020. Equipe de 4 personnes. Fait avec JSReact, ReactStrap, CSS3. Le but était de réaliser une Application Web autour de la dégustation du vin avec la du client Tonton Sommelier.
              <p className="TitleInText">
                Born In Space | WildCodeSchool
              </p>
              Réalisé du 6 Avril 2020 au 15 Mai 2020. Equipe de 4 personnes.
              Fait avec JSReact, ReactStrap, CSS3. Le but était de réaliser une
              Application Web avec les API de la Nasa.
              <p className="TitleInText">
                Around The World | WildCodeSchool
              </p>
              Réalisé du 29 Avril 2020 au 30 Avril 2020. Equipe de 3 personnes.
              Fait avec JSReact, ReactStrap, CSS3. Le but était de réaliser une
              Application Web en 32H sur une API de WebCam.
              <p className="TitleInText">
                Wild Post | WildCodeSchool
              </p>
              Réalisé du 9 Mars 2020 au 27 Mars 2020. Equipe de 4 personnes.
              Fait avec HTML5, CSS3 et JS. Le but était de réaliser un site
              statique d'un journal sur la WildCodeSchool.
            </p>
          </div>
          <div className="TextGroup">
            <h2 className="TitleGroup">EXPERIENCES PROFESSIONNELLES</h2>
            <p className="RigthPartText">
            <p className="TitleInText">
                Développeur Stagiaire | Août-Novembre 2020
              </p>
              Participation au projet Trott du 3 août au 27 Novembre 2020. Equipe de 5 personnes.
              Le but était de réaliser une Application Mobile en React-Native à partir d'un application web en React.
              <p className="TitleInText">
                Développeur Stagiaire | Novembre 2019
              </p>
              Développement Web en télé-travail avec un Freelance sur du
              Front-End (ELM). Cela m'a permis de découvrir un nouveau langage
              et d'échanger avec un développeur confirmé.
              <p className="TitleInText">
                Chauffagiste Stagiaire | Novembre 2017 et Avril 2018
              </p>
              Hôpital J. Navarre de Château-Thierry pour valider mon
              Baccalauréat Professionnel.
            </p>
          </div>
          <div className="TextGroup">
            <h2 className="TitleGroup">FORMATIONS</h2>
            <div>
              <div className="TextGroupFormations">
                <p className="TextFormationMobile TextFormationDestock">
                  <p className="TitleInText TitleInTextFormation">
                    2020&nbsp;:&nbsp;
                  </p>
                  Formation développeur Full Stack en 5 Mois à la Wild Code
                  School de Reims.
                </p>
              </div>
              <div className="TextGroupFormations">
                <p className="TextFormationMobile TextFormationDestock">
                  <p className="TitleInText TitleInTextFormation">
                    2019&nbsp;:&nbsp;
                  </p>
                  2019 : Développement Web : Formation 3 Mois au CFA AlmeaFc de Châlons-En-Champagne.
                </p>
              </div>
              <div className="TextGroupFormations">
                <p className="TextFormationMobile TextFormationDestock">
                  <p className="TitleInText TitleInTextFormation">
                    2015/2018&nbsp;:&nbsp;
                  </p>
                  Baccalauréat Professionnel Système Electronique et Numérique
                  au Lycée Jules Verne de Château-thierry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
