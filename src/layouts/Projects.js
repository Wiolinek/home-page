import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Projects = ({ language, menuState }) => {

  const [projectsState, setProjectsState] = useState();

  useEffect(() => {
    fetch(`http://localhost:3030/projects`)
    .then(response => response.json())
    .then(result => setProjectsState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language])
  

  return (
    <ProjectsWrapper id={menuState !== undefined ? menuState.link : 'projects'}>
      <div className="projects-item section-name">
        <h1>{menuState !== undefined ? menuState.name : 'Projects'}</h1>
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
  color: white;
  padding: 10vh 1vw 30vh 1vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(737px, 740px));
  grid-template-rows: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: 350px;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  grid-gap: 2em;
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
      transition: all .5s;
    }
    h1:hover {
      box-shadow: inset 0 0 6px 2px purple, 0 0 8px 2px purple;
    }
    .projects-item__project-name {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 110px;
      font-size: 2rem;
      color: purple;
      border: 3px solid purple;
      background-color: rgba(0, 0, 0, .75);
      transition: all .5s;
    }
    .projects-item__project-name:hover {
      box-shadow: inset 0 0 6px 2px purple, 0 0 8px 2px purple;
    }
    .projects-item__details {
      border: 3px solid purple;
      transition: all .5s;
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-around; */
        justify-content: center;
        height: 100%;
        padding: 1em;
        li {
          font-size: 1.3rem;
          line-height: 1.5em;
          letter-spacing: 0.05em;
          text-align: center;
        }
      }
    }
    .projects-item__details:hover {
      box-shadow: inset 0 0 6px 2px purple, 0 0 8px 2px purple;
    }
    .projects-item__photo {
      height: 180px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin: 5px 0;
    }
    .projects-item__buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 49%;
        height: 50px;
        font-size: 1.5rem;
        color: white;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        transition: all .5s;
        border: 3px solid purple;
      }
      a:hover {
        background-color: rgba(0, 0, 0, .75);
        box-shadow: inset 0 0 6px 2px purple, 0 0 8px 2px purple;
        color: purple;
        text-shadow: 1px 1px 10px purple;
      }
    }
  }
  .section-name {
    grid-column: 2 / 3;
  }
`

export default Projects;