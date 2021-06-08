import React from 'react';

import styled from 'styled-components'

const Projects = () => {

  return (
    <ProjectsWrapper id="projects">
      <div className="projects-item section-name">
        <h1>Projects</h1>
        {/* <p>DETAILS</p> */}
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>PORCELANA fotka</p>
          </div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>PHOTO COURSES fotka</p>
          </div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>PRAGA NIEZWYKŁA fotka</p>
          </div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>KOD CEZARA fotka</p>
          </div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
      <div className="projects-item">
        <div>
          <div className="projects-item__photo">
            <p>HOME PAGE fotka</p>
          </div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <p>DETAILS</p>
      </div>
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
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid purple;
      background-color: purple;
    }
    .projects-item__photo {
      height: 300px;
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
        cursor: pointer;
        text-decoration: none;
        color: white;
        text-align: center;
        background-color: purple;
      }
    }
  }
  .section-name {
    grid-column: 2 / 3;
  }
`

export default Projects;