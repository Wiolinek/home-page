import React from 'react';

import styled from 'styled-components'

const Projects = () => {

  return (
    <ProjectsWrapper>
      <div className="projects-item section-name">
        <h1>Projects</h1>
        {/* <p>DETAILS</p> */}
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>PORCELANA fotka</p>
          </div>
          <div>
            <button>LIFE</button>
            <button>CODE</button>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>PHOTO COURSES fotka</p>
          </div>
          <div>
            <button>LIFE</button>
            <button>CODE</button>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>PRAGA NIEZWYKŁA fotka</p>
          </div>
          <div>
            <button>LIFE</button>
            <button>CODE</button>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>KOD CEZARA fotka</p>
          </div>
          <div>
            <button>LIFE</button>
            <button>CODE</button>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>HOME PAGE fotka</p>
          </div>
          <div>
            <button>LIFE</button>
            <button>CODE</button>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.section`
  /* background-color: black; */
  background-color: rgba(0, 0, 0, .75);
  min-height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, 737px);
  /* grid-template-rows: repeat(auto-fill, minmax(400px, 2fr)); */
  /* grid-auto-rows: min-content; */
  grid-auto-rows: 350px;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  grid-gap: 2em;
  padding: 10vh 1vw;
  margin: 0 auto;
  .projects-item {
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    /* grid-template-rows: repeat(auto-fill, minmax(350px, 500px)); */
    /* grid-auto-rows: min-content; */
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
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid purple;
      background-color: purple;
    }
    button {
      width: 50%;
      height: 50px;
    }
    .projects-item__photo {
      height: 300px;
    }
  }
  .section-name {
    grid-column: 2 / 3;
  }
`

export default Projects;