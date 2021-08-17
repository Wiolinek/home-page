import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { device } from '../providers/breakpoints';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Projects = ({ language, menu }) => {

  const [projectsState, setProjectsState] = useState();
  const [stacksState, setStacksState] = useState();
  const [projectsDescState, setProjectsDescState] = useState();

  useEffect(() => {
    fetch(`https://ultra-violet.codes/projects`)
    .then(response => response.json())
    .then(result => setProjectsState(result))
    .catch(error => console.log(`error ${error}`))
  }, [])

  useEffect(() => {
    fetch(`https://ultra-violet.codes/stacks`, {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language: language}),
    })
    .then(response => response.json())
    .then(result => setStacksState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language]);

  useEffect(() => {
    fetch(`https://ultra-violet.codes/descriptions`, {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language: language}),
    })
    .then(response => response.json())
    .then(result => setProjectsDescState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language]);

  useEffect(() => {

    gsap.set('.projects-item__project-name', {
      y: -110,
      duration: .5,
    });
    
    gsap.set('.projects-item__project-desc', {
      y: 110,
      duration: .3,
    });

    gsap.set('.projects-item__photo', {
      x: -110,
      duration: .3,
    });

    gsap.set('.projects-item__details', {
      y: 110,
      duration: .5,
    });

    gsap.set('.life', {
      x: -110,
      duration: .3,
    });

    gsap.set('.code', {
      x: 110,
      duration: .3,
    });

    gsap.set('.projects__section-name--bar', {
      x: -110,
      duration: .3,
    });

    gsap.set('.projects__section-name--name', {
      x: 110,
      duration: .3,
    });
    
    gsap.set('.projects-item__stack-desc', {
      x: 110,
      duration: .3,
    });

    gsap.set('.projects-item__stack-photo--replit', {
      y: -110,
      duration: .3,
    });

    gsap.set('.projects-item__stack-photo--stackblitz', {
      y: 110,
      duration: .3,
    });
    
    ScrollTrigger.batch('.projects__section-name', {
      onEnter: batch => {
        batch.forEach(element => gsap.to(element.children, {opacity: 1, x: 0, ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end:'top 20%',
            scrub: true,
            toggleActions:'play restart complete reverse',
          }
        }))
      },
      once: true,
    });

    ScrollTrigger.batch('.projects-item', {
      onEnter: batch => {
        batch.forEach(element => gsap.to(element.children, {opacity: 1, y: 0, x: 0, ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end:'top 40%',
            scrub: true,
            toggleActions:'play restart complete reverse',
          }
        }))
      },
      once: true,
    });

    ScrollTrigger.batch('.projects-item__stack-item', {
      onEnter: batch => {
        batch.forEach(element => gsap.to(element.children, {opacity: 1, y: 0, x: 0, ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end:'top 50%',
            scrub: true,
            toggleActions:'play restart complete reverse',
          }
        }))
      },
      once: true,
    });
  });
  

  return (
    <ProjectsWrapper id="projects" className="projects">
      <div className="projects__section-name">
        <p className="projects__section-name--bar"></p>
        <h1 className="projects__section-name--name">{menu !== undefined ? menu.name : 'Projects'}</h1>
      </div>
      <div className="projects__container">
          {projectsState !== undefined & projectsDescState !== undefined && projectsState.map((project, index) => 
          <div key={project.name + project.language} className="projects-item">
            <p className="projects-item__project-name">{project.name}</p>
            <p className="projects-item__project-desc">{projectsDescState[index][language]}</p>
            <div className="projects-item__photo" style={{backgroundImage: `url(${project.image})`}}></div>
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
          {stacksState !== undefined &&
            <div className="projects-item projects-item__stack-item">
              <p className="projects-item__stack-desc">{stacksState[0].description}</p>
              <div className="projects-item__stack-photo projects-item__stack-photo--replit">
                <a href={stacksState[0].link} target="_blank" rel="noreferrer">
                  <img src={stacksState[0].image} alt={stacksState[0].name}></img>
                </a>
              </div>
              <div className="projects-item__stack-photo projects-item__stack-photo--stackblitz">
                <a href={stacksState[1].link} target="_blank" rel="noreferrer">
                  <img src={stacksState[1].image} alt={stacksState[1].name}></img>
                </a>
              </div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
              <div className="projects-item__stack-break"></div>
            </div>
          }
        </div>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  color: ${props => props.theme.textColor};
  padding: 15vh 0 0 0;
  .projects-item {
    display: grid;
    grid-gap: 1px;
    grid-auto-flow: dense;
    width: 100%;
    @media ${device.mobileXS} {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(auto-fill, 16.28vw);
      grid-auto-rows: 16.28vw;
    }
    @media ${device.mobileS} {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(auto-fill, 16.38vw);
      grid-auto-rows: 16.38vw;
    }
    @media ${device.mobileM} { 
      grid-template-rows: repeat(auto-fill, 16.52vw);
      grid-auto-rows: 16.52vw;
    }
    @media ${device.mobileL} { 
      grid-template-rows: repeat(auto-fill, 16.52vw);
      grid-auto-rows: 16.52vw;
    }
    @media ${device.tablet} {
      grid-template-rows: repeat(auto-fill, 16.56vw);
      grid-auto-rows: 16.56vw;
    }
    @media ${device.laptopS} {
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(auto-fill, 14.2vw);
      grid-auto-rows: 14.2vw;
    }
    @media ${device.laptopM} {
      grid-template-rows: repeat(auto-fill, 14.21vw);
      grid-auto-rows: 14.21vw;
    }
    @media ${device.laptopL} {
      grid-template-rows: repeat(auto-fill, 14.23vw);
      grid-auto-rows: 14.23vw;
    }
    .projects-item__project-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      line-height: 1.4em;
      letter-spacing: .05em;
      text-align: center;
      padding: .3em;
      background-color: ${props => props.theme.background};
      @media ${device.mobileXS} {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
        font-size: 2.1rem;
      }
      @media ${device.mobileS} {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
        font-size: 2.1rem;
      }
      @media ${device.mobileM} {
        grid-column: -3 / -1;
        grid-row: 1 / 2;
      }
      @media ${device.laptopS} {
        grid-column: -4 / -1;
      }
      @media ${device.laptopM} {
        grid-column: 4 / 5;
      }
      @media ${device.laptopL} {
        font-size: 2.2rem;
      }
    }
    .projects-item__project-desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      line-height: 1.4em;
      letter-spacing: .05em;
      text-align: center;
      padding: .3em;
      background-color: ${props => props.theme.background};
      @media ${device.mobileXS} { 
        grid-column: 3 / 7;
        grid-row: 1 / 3;
      }
      @media ${device.mobileS} {
        grid-column: 3 / 7;
        grid-row: 1 / 3;
      }
      @media ${device.mobileM} {
        grid-column: -3 / -1;
        grid-row: 2 / 3;
      }
      @media ${device.tablet} {
        grid-column: 3 / 5;
        grid-row: 3 / 4;
      }
      @media ${device.laptopM} {
        grid-column: 4 / 5;
        grid-row: 2 / 3;
      }
    }
    .projects-item__details {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: .3em;
      background-color: ${props => props.theme.background};
      list-style: none;
      @media ${device.mobileXS} {
        grid-column: 3 / -1;
        grid-row: 6 / 10;
      }
      @media ${device.mobileS} {
        grid-column: 3 / -1;
        grid-row: 6 / 10;
      }
      @media ${device.mobileM} {
        grid-column: -3 / -1;
        grid-row: 3 / 6;
      }
      @media ${device.tablet} {
        grid-row: 2 / 4;
      }
      @media ${device.laptopS} {
        grid-column: -4 / -1;
      }
      @media ${device.laptopM} {
        grid-column: 5 / 7;
        grid-row: 1 / 3;
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
      @media ${device.mobileXS} {
        grid-column: 1 / 8;
        grid-row: 3 / 6;
      }
      @media ${device.mobileS} {
        grid-column: 1 / 8;
        grid-row: 3 / 6;
      }
      @media ${device.mobileM} {
        grid-column: 1 / 5;
        grid-row: 1 / 4;
      }
      @media ${device.tablet} {
        grid-row: 1 / 3;
      }
      @media ${device.laptopM} {
        grid-column: 1 / 4;
      }
    }
    .projects-item__button {
      background-color: ${props => props.theme.background};
      transition: all .5s;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 2.2rem;
        font-family: var(--primary-font-family);
        font-weight: ${props => props.theme.fontWeightOnPurple};
        color: ${props => props.theme.textColor};
        text-decoration: none;
        line-height: 1.4em;
        padding: .5em;
        border-style: none;
        outline: none;
        transition: all .5s;
        cursor: none;
      }
      &:hover {
        background-color: var(--primary-color);
        a {
          font-weight: ${props => props.theme.fontWeightOnPurple};
          color: ${props => props.theme.textColorOnPurple};
        }
      }
    }
    .life {
      @media ${device.mobileXS} {
        grid-column: 1 / 3;
        grid-row: 6 / 8;
      }
      @media ${device.mobileS} {
        grid-column: 1 / 3;
        grid-row: 6 / 8;
      }
      @media ${device.mobileM} {
        grid-row: 4 / 6;
      }
      @media ${device.tablet} {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
      @media ${device.laptopM} {
        grid-column: -2 / -1;
        grid-row: 1 / 2;
      }
    }
    .code {
      @media ${device.mobileXS} {
        grid-column: 1 / 3;
        grid-row: 8 / 10;
      }
      @media ${device.mobileS} {
        grid-column: 1 / 3;
        grid-row: 8 / 10;
      }
      @media ${device.mobileM} {
        grid-column: 3 / 5;
        grid-row: 4 / 6;
      }
      @media ${device.tablet} {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }
      @media ${device.laptopM} {
        grid-column: -2 / -1;
        grid-row: 2 / 3;
      }
    }
    .projects-item__stack-break {
      background-color: ${props => props.theme.background};
      @media ${device.laptopL} {
        border-bottom: 1px solid var(--primary-color);
      }
    }
    .projects-item__stack-break:nth-last-child(-n+2) {
      display: block;
      background-color: ${props => props.theme.background};
      @media ${device.laptopS} {
        display: none;
      }
    }
    .projects-item__break:last-child {
      display: none;
      background-color: ${props => props.theme.background};
      @media ${device.laptopS} {
        display: block;
      }
    }
  }
  .projects__section-name {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(1, 14.2vw);
    grid-auto-flow: dense;
    width: 100%;
    border-bottom: 1px solid var(--primary-color);
    .projects__section-name--bar {
      background-color: ${props => props.theme.background};
      @media ${device.mobileXS} {
        display: none;
      }
      @media ${device.mobileS} {
        display: none;
      }
      @media ${device.laptopS} {
        grid-column: 1 / -3;
        display: block;
      }
    }
    .projects__section-name--name {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      background-color: ${props => props.theme.background};
      @media ${device.mobileXS} {
        grid-column: 1 / -1;
        font-size: 4rem;
      }
      @media ${device.mobileS} {
        grid-column: 1 / -1;
        font-size: 4rem;
      }
      @media ${device.laptopS} {
        grid-column: -3 / -1;
        font-size: 3.2rem;
      }
      @media ${device.laptopM} {
        font-size: 3.5rem;
      }
      @media ${device.laptopL} {
        font-size: 4rem;
      }
    }
  }
  .projects-item__stack-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 1.4em;
    letter-spacing: .05em;
    text-align: center;
    padding: .3em;
    background-color: ${props => props.theme.background};
    @media ${device.mobileXS} {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
    @media ${device.mobileS} {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
    @media ${device.tablet} { 
      grid-column: 2 / 4;
      grid-row: 1 / 3;
    }
    @media ${device.laptopS} {
      grid-column: 2 / 4;
      grid-row: 1 / 2;
    }
    @media ${device.laptopL} {
      border-bottom: 1px solid var(--primary-color);
    }
  }
  .projects-item__stack-photo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${props => props.theme.background};
    transition: all .5s;
    @media ${device.mobileXS} {
      img {
        width: 50px;
      }
    }
    @media ${device.mobileS} {
      img {
        width: 60px;
      }
    }
    @media ${device.tablet} {
      img {
        width: 70px;
      }
    }
    @media ${device.laptopS} {
      img {
        width: 80px;
      }
    }
    @media ${device.laptopM} {
      img {
        width: 90px;
      }
    }
    @media ${device.laptopL} {
      img {
        width: 100px;
      }
    }
    &:hover {
      background-color: var(--primary-color);
    }
  }
  .projects-item__stack-photo--replit {
    @media ${device.mobileXS} {
      grid-column: 3 / 5;
      grid-row: 1 / 3;
    }
    @media ${device.mobileS} { 
      grid-column: 3 / 5;
      grid-row: 1 / 3;
    }
    @media ${device.tablet} {
      grid-column: 5 / 6;
      grid-row: 1 / 2;
    }
    @media ${device.laptopL} {
      border-bottom: 1px solid var(--primary-color);
    }
  }
  .projects-item__stack-photo--stackblitz {
    @media ${device.mobileXS} {
      grid-column: 5 / 7;
      grid-row: 1 / 3;
    }
    @media ${device.mobileS} {
      grid-column: 5 / 7;
      grid-row: 1 / 3;
    }
    @media ${device.tablet} {
      grid-column: 5 / 6;
      grid-row: 2 / 3;
    }
    @media ${device.laptopS} {
      grid-column: 6 / 7;
      grid-row: 1 / 2;
    }
    @media ${device.laptopL} {
      border-bottom: 1px solid var(--primary-color);
    }
  }
  .projects-item__break {
    background-color: ${props => props.theme.background};
    border-bottom: 1px solid var(--primary-color);
    @media ${device.mobileXS} {
      grid-row: 10 / 11;
    }
    @media ${device.mobileS} {
      grid-row: 10 / 11;
    }
    @media ${device.mobileM} {
      grid-row: 6 / 7;
    }
    @media ${device.tablet} {
      grid-row: 4 / 5;
    }
    @media ${device.laptopM} {
      grid-row: 3 / 4;
    }
  }
  .projects-item__break:last-child {
    display: none;
    background-color: ${props => props.theme.background};
    @media ${device.laptopS} {
      display: block;
    }
  }

`

export default React.memo(Projects);