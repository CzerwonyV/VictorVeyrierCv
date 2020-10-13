import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Sites } from '../../api/Provider';
import "./Card.css";

const Cards = () => {
    return (
      <>
        <div className="siteCard">
          {
            Sites.map(provider => (
              <CardContent>
                <UrlContainer>
                  <Url
                    href={provider.urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconGithub icon={faGithubSquare}/>
                  </Url>
                  <Url
                    href={provider.urlSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconSite icon={faExternalLinkAlt}/>
                  </Url>
                </UrlContainer>
                <CardImg
                  src={provider.urlImg}
                  alt={provider.name}
                />
                <CardName>{provider.name}</CardName>
                <CardDescription>{provider.descritpion}</CardDescription>
              </CardContent>
            ))
          }
        </div>
      </>
    )
  }

const CardContent = styled.section`
  border-radius: 0.25rem;
  margin-bottom: 2vh;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 4rem;
  margin-left: 3rem;
  margin-right: 3rem;
  position: relative;
  border-radius: 0.25rem;
`;

const CardImg = styled.img`
  width: 100%;
  padding: 0.5rem;
`;

const CardName = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  margin-top: 0.7rem;
  padding-bottom: 0.2rem;
  border-bottom: solid #03DAC6;
  display: flex;
  align-self: center;
  font-family: "Cooper Hewitt";
`;

const CardDescription = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  padding: 1rem;
  margin-top: -0.7rem;
  margin-bottom: 0.3rem;
`;

const UrlContainer = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: row;
  background: linear-gradient(to left top, #1D1D1D, #363636);
  border-radius: 0.25rem;
  align-content: flex-end;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const Url = styled.a`

`;

const IconGithub = styled(FontAwesomeIcon)`
  color: #FFF;
  font-size: 1.5rem;
  margin: 0.5rem;
  z-index: 2;
`;

const IconSite = styled(FontAwesomeIcon)`
  color: #FFF;
  font-size: 1.3rem;
  margin: 0.5rem;
  z-index: 2;
`;

export default Cards;
