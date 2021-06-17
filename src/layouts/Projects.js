import React from 'react';

import styled from 'styled-components'

import home from '../images/home.png';

const Projects = () => {

  return (
    <ProjectsWrapper id="projects">
      <div className="projects-item section-name">
        <h1>Projects</h1>
      </div>
      <div className="projects-item">
        <div>
          <p className="projects-item__project-name">Porcelana</p>
          <div className="projects-item__photo"></div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <div className="projects-item__details">
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>React Scroll</li>
            <li>GSAP</li>
            <li>Day.js</li>
            <li>SASS</li>
            <li>Axios</li>
            <li>Express.js</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
      <div className="projects-item">
        <div>
          <p className="projects-item__project-name">Photo Courses</p>
          <div className="projects-item__photo"></div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <div className="projects-item__details">
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>Redux Persist</li>
            <li>Google Map React</li>
            <li>React Image Gallery</li>
            <li>Day.js</li>
            <li>BEM</li>
            <li>Express.js</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
      <div className="projects-item">
        <div>
          <p className="projects-item__project-name">Praga Niezwykła</p>
          <div className="projects-item__photo"></div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <div className="projects-item__details">
          <ul>
            <li>Wordpress</li>
            <li>Woocommerce</li>
            <li>BEM</li>
          </ul>
        </div>
      </div>
      <div className="projects-item">
        <div>
          <p className="projects-item__project-name">Cesar Code</p>
          <div className="projects-item__photo"></div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <div className="projects-item__details">
          <ul>
            <li>Vanilla JS</li>
          </ul>
        </div>
      </div>
      <div className="projects-item">
        <div>
        <p className="projects-item__project-name">Home Page</p>
          <div className="projects-item__photo"></div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <div className="projects-item__details">
          <ul>
            <li>React</li>
            <li>React Styled Components</li>
            <li>BEM</li>
          </ul>
        </div>
      </div>
      <div className="projects-item">
        <div>
          <p className="projects-item__project-name">Code Snippets</p>
          <div className="projects-item__photo"></div>
          <div className="projects-item__buttons">
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">LIFE</a>
            <a href="https://www.facebook.com/violinek123" target="_blank" rel="noreferrer">CODE</a>
          </div>
        </div>
        <div className="projects-item__details">
          <ul>
            <li>You can also check my work on Codepen</li>
          </ul>
        </div>
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
    .projects-item__project-name {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 50px;
      font-size: 1.5rem;
      border: 3px solid purple;
      background-color: purple;
    }
    .projects-item__details {
      /* display: flex; */
      /* align-items: center; */
      /* justify-content: center; */
      border: 3px solid purple;
      background-color: purple;
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
      height: 250px;
      background-image: url(${home});
      background-size: cover;
      background-position: 20% top;
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