import React, { useEffect, useState } from 'react';

import styled from 'styled-components'


const Projects = ({ language }) => {

  const [projectsState, setProjectsState] = useState();

  useEffect(() => {
    fetch(`http://localhost:3030/projects`)
    .then(response => response.json())
    .then(result => setProjectsState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language])
  
  return (
    <ProjectsWrapper id="projects">
      <div className="projects-item section-name">
        <h1>Projects</h1>
      </div>
        {projectsState !== undefined && projectsState.map(project => 
        <div key={project.name + project.language} className="projects-item">
          <div>
            <p className="projects-item__project-name">{project.name}</p>
            {/* <p className="projects-item__project-desc">krotki opis strony w każdym języku</p> */}
            <div className="projects-item__photo" style={{backgroundImage: `url(${project.image})`}}></div>
            <div className="projects-item__buttons">
              <a href={project.life} target="_blank" rel="noreferrer">LIFE</a>
              <a href={project.code} target="_blank" rel="noreferrer">CODE</a>
            </div>
          </div>
          <div className="projects-item__details">
            <ul>
              {project.technologies.split('\r\n').map(technologie =>
                <li key={project.name + technologie} >{technologie}</li>)}
            </ul>
          </div>
        </div>
        )}
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.section`
  background-color: rgba(0, 0, 0, .75);
  /* min-height: 100vh; */
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(737px, 740px));
  grid-template-rows: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: 350px;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  grid-gap: 2em;
  padding: 10vh 1vw;
  margin: 0 auto;
  .projects-item {
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-auto-rows: 350px;
    grid-gap: 2em;
    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5em;
      border: 3px solid purple;
      grid-column: 1 / 3;
    }
    .projects-item__project-name {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 110px;
      font-size: 2rem;
      border: 3px solid purple;
      background-color: purple;
    }
    /* .projects-item__project-desc {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 70px;
      font-size: 1.5rem;
      border: 3px solid purple;
      background-color: purple;
    } */
    .projects-item__details {
      /* display: flex; */
      /* align-items: center; */
      /* justify-content: center; */
      border: 3px solid purple;
      /* background-color: purple; */
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        padding: 1em;
        li {
          font-size: 1.3rem;
          letter-spacing: 0.05em;
          text-align: center;
        }
      }
    }
    .projects-item__photo {
      height: 180px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin: 5px 0;
      /* img {
        height: 100%;
        object-position: center center;
        object-fit: cover;
      } */
    }
    .projects-item__buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* min-height: 10%; */
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 49%;
        height: 50px;
        font-size: 1.5rem;
        color: white;
        text-align: center;
        background-color: purple;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
  .section-name {
    grid-column: 2 / 3;
  }
`

export default Projects;