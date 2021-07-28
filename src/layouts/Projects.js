import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { device } from '../providers/breakpoints';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Projects = ({ language, menu }) => {

  const [projectsState, setProjectsState] = useState();

  useEffect(() => {
    fetch(`https://ultra-violet.codes/projects`)
    .then(response => response.json())
    .then(result => setProjectsState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language])
  

  return (
    <ProjectsWrapper id="projects">
      <div className="projects-item section-name">
        <p></p>
        <h1>{menu !== undefined ? menu.name : 'Projects'}</h1>
      </div>
        {projectsState !== undefined && projectsState.map(project => 
        <div key={project.name + project.language} className="projects-item">
            <p className="projects-item__project-name">{project.name}</p>
            <p className="projects-item__project-desc">krotki opis strony w każdym języku</p>
            <div className="projects-item__photo" style={{backgroundImage: `url(${project.image})`}}>
            </div>
            <div className="projects-item__button life">
              <a href={project.life} target="_blank" rel="noreferrer">LIVE</a>
            </div>
            <div className="projects-item__button code">
              <a href={project.code} target="_blank" rel="noreferrer">CODE</a>
            </div>
            <ul className="projects-item__details">
              {project.technologies.split('\r\n').map(technologie => 
                <li key={project.name + technologie} >{technologie}</li>)}
            </ul>
            <div className="projects-item__break"></div>
            <div className="projects-item__break"></div>
            <div className="projects-item__break"></div>
            <div className="projects-item__break"></div>
            <div className="projects-item__break"></div>
            <div className="projects-item__break"></div>
            <div className="projects-item__break"></div>
        </div>
        )}
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.section`
  min-height: 100vh;
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15vh 0 0 0;
  color: ${props => props.theme.textColor};
  /* overflow-x: scroll;  */
  .projects-item {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(3, 14.2vw);
    grid-row-gap: wrap;
    grid-auto-rows: 14.2vw;
    grid-gap: 1px;
    /* width: 90vw; */
    /* height: 100%; */
    /* overflow: hidden; */
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(auto-fill, 16.28vw);
      grid-auto-rows: 16.28vw;
    }
    @media ${device.mobileS} {  /* min-width: 320px*/
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(auto-fill, 16.38vw);
      grid-auto-rows: 16.38vw;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(auto-fill, 16.52vw);
      grid-auto-rows: 16.52vw;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(auto-fill, 16.52vw);
      grid-auto-rows: 16.52vw;
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(auto-fill, 16.56vw);
      grid-auto-rows: 16.56vw;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(auto-fill, 14.2vw);
      grid-auto-rows: 14.2vw;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(auto-fill, 14.21vw);
      grid-auto-rows: 14.21vw;
    }
    @media ${device.laptopL} {  /* min-width: 1600px*/
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(auto-fill, 14.23vw);
      grid-auto-rows: 14.23vw;
    }
    .projects-item__project-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.background};
      height: 100%;
      font-size: 2rem;
      line-height: 1.4em;
      letter-spacing: .05em;
      text-align: center;
      padding: .5em;
      @media ${device.mobileXS} { /* max-width: 319px*/
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        grid-column: -3 / -1;
        grid-row: 1 / 2;
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        grid-column: -3 / -1;
        grid-row: 1 / 2;
      }
      @media ${device.tablet} { /* min-width: 768px*/
        grid-column: -3 / -1;
        grid-row: 1 / 2;
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        grid-column: -4 / -1;
        grid-row: 1 / 2;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        grid-column: 4 / 5;
        grid-row: 1 / 2;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/

      }
    }
    .projects-item__project-desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.background};
      padding: .5em;
      font-size: 1.4rem;
      line-height: 1.4em;
      letter-spacing: .05em;
      text-align: center;
      @media ${device.mobileXS} { /* max-width: 319px*/
        grid-column: 3 / 7;
        grid-row: 1 / 3;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        grid-column: 3 / 7;
        grid-row: 1 / 3;
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        grid-column: -3 / -1;
        grid-row: 2 / 3;
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        grid-column: -3 / -1;
        grid-row: 2 / 3;
      }
      @media ${device.tablet} { /* min-width: 768px*/
        grid-column: 3 / 5;
        grid-row: 3 / 4;
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        grid-column: 3 / 5;
        grid-row: 3 / 4;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        grid-column: 4 / 5;
        grid-row: 2 / 3;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/

      }
    }
    .projects-item__details {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.background};
      padding: .5em;
      list-style: none;
      @media ${device.mobileXS} { /* max-width: 319px*/
        grid-column: 3 / -1;
        grid-row: 6 / 10;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        grid-column: 3 / -1;
        grid-row: 6 / 10;
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        grid-column: -3 / -1;
        grid-row: 3 / 6;
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        grid-column: -3 / -1;
        grid-row: 3 / 6;
      }
      @media ${device.tablet} { /* min-width: 768px*/
        grid-column: -3 / -1;
        grid-row: 2 / 4;
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        grid-column: -4 / -1;
        grid-row: 2 / 4;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        grid-column: 5 / 7;
        grid-row: 1 / 3;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/

      }
      li {
        font-size: 1.4rem;
        line-height: 1.4em;
        letter-spacing: .05em;
        text-align: center;
      }
    }
    .projects-item__photo {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-color: ${props => props.theme.background};
      @media ${device.mobileXS} { /* max-width: 319px*/
        grid-column: 1 / 8;
        grid-row: 3 / 6;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        grid-column: 1 / 8;
        grid-row: 3 / 6;
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        grid-column: 1 / 5;
        grid-row: 1 / 4;
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        grid-column: 1 / 5;
        grid-row: 1 / 4;
      }
      @media ${device.tablet} { /* min-width: 768px*/
        grid-column: 1 / 5;
        grid-row: 1 / 3;
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        grid-column: 1 / 5;
        grid-row: 1 / 3;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        grid-column: 1 / 4;
        grid-row: 1 / 3;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/

      }
    }
    .projects-item__button {
      background-color: ${props => props.theme.background};
      transition: all .5s;
      a {
        font-family: var(--primary-font-family);
        font-size: 2.2rem;
        padding: 1.5em;
        line-height: 1.4em;
        color: ${props => props.theme.textColor};
        font-weight: ${props => props.theme.fontWeightOnPurple};
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-style: none;
        outline: none;
        text-decoration: none;
        transition: all .5s;
        cursor: none;
      }
      &:hover {
        background-color: var(--primary-color);
        a {
          color: ${props => props.theme.textColorOnPurple};
          font-weight: ${props => props.theme.fontWeightOnPurple};
          font-size: 2.8rem; 
        }
      }
    }
    .life {
      @media ${device.mobileXS} { /* max-width: 319px*/
        grid-column: 1 / 3;
        grid-row: 6 / 8;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        grid-column: 1 / 3;
        grid-row: 6 / 8;
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        grid-column: 1 / 3;
        grid-row: 4 / 6;
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        grid-column: 1 / 3;
        grid-row: 4 / 6;
      }
      @media ${device.tablet} { /* min-width: 768px*/
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        grid-column: -2 / -1;
        grid-row: 1 / 2;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/

      }
    }
    .code {
      @media ${device.mobileXS} { /* max-width: 319px*/
        grid-column: 1 / 3;
        grid-row: 8 / 10;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        grid-column: 1 / 3;
        grid-row: 8 / 10;
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        grid-column: 3 / 5;
        grid-row: 4 / 6;
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        grid-column: 3 / 5;
        grid-row: 4 / 6;
      }
      @media ${device.tablet} { /* min-width: 768px*/
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        grid-column: -2 / -1;
        grid-row: 2 / 3;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/

      }
    }
    .projects-item__break {
      background-color: ${props => props.theme.background};
      border-bottom: 1px solid var(--primary-color);
      @media ${device.mobileXS} { /* max-width: 319px*/
        grid-row: 10 / 11;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        grid-row: 10 / 11;
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        grid-row: 6 / 7;
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        grid-row: 6 / 7;
      }
      @media ${device.tablet} { /* min-width: 768px*/
        grid-row: 4 / 5;
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        grid-row: 4 / 5;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        grid-row: 3 / 4;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/

      }
    }
    .projects-item__break:last-child {
      background-color: ${props => props.theme.background};
      display: none;
      @media ${device.mobileXS} { /* max-width: 319px*/

      }
      @media ${device.mobileS} { /* min-width: 320px*/

      }
      @media ${device.mobileM} { /* min-width: 460px*/

      }
      @media ${device.mobileL} { /* min-width: 640px*/

      }
      @media ${device.tablet} { /* min-width: 768px*/
        
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        display: block;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/

      }
      @media ${device.laptopL} { /* min-width: 1600px*/

      }
    }
  }
  .section-name {
    width: 100%;
    grid-template-rows: repeat(1, 14.2vw);
    border-bottom: 1px solid var(--primary-color);
    p {
      background-color: ${props => props.theme.background};
      @media ${device.mobileXS} { /* max-width: 319px*/
        display: none;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        display: none;
      }
      @media ${device.mobileM} { /* min-width: 460px*/

      }
      @media ${device.mobileL} { /* min-width: 640px*/

      }
      @media ${device.tablet} { /* min-width: 768px*/

      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        display: block;
        grid-column: 1 / -3;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/

      }
      @media ${device.laptopL} { /* min-width: 1600px*/

      }
    }
    h1 {
      background-color: ${props => props.theme.background};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      @media ${device.mobileXS} { /* max-width: 319px*/
        font-size: 4rem;
        grid-column: 1 / -1;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        font-size: 4rem;
        grid-column: 1 / -1;
      }
      @media ${device.mobileM} { /* min-width: 460px*/

      }
      @media ${device.mobileL} { /* min-width: 640px*/

      }
      @media ${device.tablet} { /* min-width: 768px*/

      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        font-size: 3.2rem;
        grid-column: -3 / -1;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        font-size: 3.5rem;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/
        font-size: 4rem;
      }
    }
  }
`

export default React.memo(Projects);