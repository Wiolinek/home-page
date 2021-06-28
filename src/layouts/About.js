import React, { useEffect, useState } from 'react';
import photo from '../images/photo1.jpg';
import styled from 'styled-components';


const About = ({ language, menuState }) => {

  const [aboutState, setAboutState] = useState();

  useEffect(() => {
    fetch(`http://localhost:3030/home_page`, {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language: language}),
    })
    .then(response => response.json())
    .then(result => setAboutState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language])
  

  return (
    <AboutWrapper id={menuState !== undefined ? menuState.link : 'about'}>
      <div className="my-photo">
          <img src={photo} alt="Logo" />
      </div>
      <div className="section-name">
        <h1>{menuState !== undefined ? menuState.name : 'About Me'}</h1>
      </div>
      <div className="about__intro">
        {aboutState !== undefined ? <p>{aboutState[0].intro}</p> : null}
      </div>
      <article className="about__text">
        {aboutState !== undefined ? <p>{aboutState[0].about}</p> : null}
      </article>
      <div className="contact-me-btn">
        <a href="#contact">{aboutState !== undefined ? aboutState[0].button : 'Contact Me!'}</a>
      </div>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  background-color: rgba(0, 0, 0, .75);
  min-height: 100vh;
  color: white;
  padding: 10vh 1vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-auto-rows: 350px;
  align-items: center;
  justify-content: center;
  grid-gap: 2em;
  grid-auto-flow: row dense;
  margin: 0 auto;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid purple;
    height: 100%;
  }
  .section-name {
    grid-column: 3 / 5;
    h1 {
      font-size: 5em;
    }
  }
  .about__intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .5em;
    background-color: purple;
    border: 3px solid purple;
    height: 100%;
    p {
      font-size: 1.5rem;
      line-height: 1.8em;
      letter-spacing: 0.05em;
      padding: .3em;
      white-space: pre-wrap;
      /* font-family: 'Aldrich', sans-serif; */
      /* font-family: 'Quantico', sans-serif; */
      /* font-family: 'Electrolize', sans-serif; */
      /* font-family: 'Chakra Petch', sans-serif; */
      font-family: 'Turret Road', cursive;
      /* font-family: 'Rationale', sans-serif; */
      /* font-family: 'Iceland', cursive; */
      /* font-weight: 700; */
    }

  }
  .my-photo {
    grid-column: 2 / 3;
    /* align-self: flex-start; */
    /* position: relative; */
    /* align-content: center; */
    /* text-align: center; */
    /* width: 60%; */
    img {
      /* position: relative; */
      width: 250px;
      /* border: 3px solid purple; */
      z-index: 10;
    }
  }
    /* .my-photo::after { */
      /* content: ""; */
      /* position: absolute; */
      /* width: 350px; */
      /* max-height: 100%; */
      /* top: 10%; */
      /* bottom: -10%; */
      /* left: -10%; */
      /* right: 10%; */
      /* background-color: purple; */
      /* border: 7px solid purple; */
      /* z-index: 0; */
    /* } */
    
  .about__text {
    grid-column: 1 / 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .5em;
    border: 3px solid purple;
    height: 100%;
    p {
      font-size: 1.5rem;
      line-height: 1.8em;
      letter-spacing: 0.05em;
      padding: .3em;
      white-space: pre-wrap;
      /* font-family: 'Aldrich', sans-serif; */
      /* font-family: 'Quantico', sans-serif; */
      /* font-family: 'Electrolize', sans-serif; */
      /* font-family: 'Chakra Petch', sans-serif; */
      font-family: 'Turret Road', cursive;
      /* font-family: 'Rationale', sans-serif; */
      /* font-family: 'Iceland', cursive; */
      /* font-weight: 700; */
    }
  }
  .contact-me-btn {
    grid-column: 4 / 5;
    a {
      font-family: 'Turret Road', cursive;
      font-size: 2rem;
      padding: 1.7em;
      line-height: 1.8em;
      color: white;
      text-align: center;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-color: black;
      background-color: transparent;
      border-style: none;
      outline: none;
      text-decoration: none;
      cursor: pointer;
      transition: background-color .5s;
    }
    a:hover {
      background-color: purple;
    }
  }
`

export default About;