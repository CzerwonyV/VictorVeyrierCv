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
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFolder,
  faMobile
} from "@fortawesome/free-solid-svg-icons";
import "./CV.css";

const CV = props => {
  return (
    <>
      <div className="CVContent">
        <div className="LeftPart">
          <div className="TextGroup">
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
              <br />- NodeJS&nbsp;
              <FontAwesomeIcon icon={faNodeJs} id="logoNodeJS" />
              <br />- Bootstrap&nbsp;(Reactstrap)&nbsp;
              <FontAwesomeIcon icon={faBootstrap} id="logoBootstrap" />
              <br />- Git&nbsp;
              <FontAwesomeIcon icon={faGitAlt} id="logoGit" />
              &nbsp;|&nbsp;GitHub&nbsp;
              <FontAwesomeIcon icon={faGithubSquare} id="logoGithubCV" />
              <br />- Méthode Scrum
              <p className="TitleInText" id="GeneralSkill">
                Compétences Générales&nbsp;:
              </p>
              - Travail En Equipe
              <br />- Organisation
              <br />- Créativité
            </p>
          </div>
          <div className="TextGroup">
            <h2 className="TitleGroup">CENTRES D'INTERETS</h2>
            <p>
              - Sport(Football,NBA,F1)
              <br />- Jeux Vidéo
              <br />- VTT
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
              victor.veyrier@icloud.com&nbsp;
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div>
              06 04 19 79 97&nbsp;
              <FontAwesomeIcon icon={faMobile} />
            </div>
          </div>
        </div>
        <div className="RigthPart">
          <div className="TextGroup">
            <h2 className="TitleGroup">EXPERIENCES PROFESSIONNELLES</h2>
            <p>
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
            <h2 className="TitleGroup">PROJET WEB</h2>
            <p>
              <p className="TitleInText">
                Projet 1 | Wild Post | WildCodeSchool
              </p>
              Réalisé du 9 Mars 2020 au 27 Mars 2020. Equipe de 4 personnes.
              Fait avec HTML5, CSS3 et JS. Le but était de réaliser un site
              statique d'un journal sur la WildCodeSchool.
              <p className="TitleInText">
                Hackathon | Around The World | WildCodeSchool
              </p>
              Réalisé du 29 Avril 2020 au 30 Avril 2020. Equipe de 3 personnes.
              Fait avec JSReact, ReactStrap, CSS3. Le but était de réaliser une
              Application Web en 32H sur une API de WebCam.
              <p className="TitleInText">
                Projet 2 | Born In Space | WildCodeSchool
              </p>
              Réalisé du 6 Avril 2020 au 15 Mai 2020. Equipe de 4 personnes.
              Fait avec JSReact, ReactStrap, CSS3. Le but était de réaliser une
              Application Web avec les API de la Nasa.
            </p>
          </div>
          <div className="TextGroup">
            <h2 className="TitleGroup">FORMATIONS</h2>
            <div>
              <div className="TextGroupFormations">
                <p>
                  <p className="TitleInText TitleInTextFormation">
                    2020&nbsp;:&nbsp;
                  </p>
                  Formation développeur Full Stack en 5 Mois à la Wild Code
                  School de Reims.
                </p>
              </div>
              <div className="TextGroupFormations">
                <p>
                  <p className="TitleInText TitleInTextFormation">
                    2019&nbsp;:&nbsp;
                  </p>
                  Remise à Niveau Numérique et Codage (Développement Web) : 3
                  Mois au CFA Almea Fc de Châlons-En-Champagne.
                </p>
              </div>
              <div className="TextGroupFormations">
                <p>
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
