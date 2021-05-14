import React from 'react';
import photo from '../images/photo1.jpg';

import styled from 'styled-components'


const About = () => {



  return (
    <AboutWrapper>
      <div>
        <h1>About Me</h1>
        <div><img src={photo} alt="Logo" /></div>
      </div>
      <article>
        <p>Hello, my name is Wiola and I'm a junior front end developer.</p>
        <p>I started my journey with programming in March 2020 and all you can see here is effect of my hard work during last year.</p>
        <p>I based my knowledge and skills on on-line courses and tutorials and official documentation.</p>
        <p>With your little help I am sure I can achieve much, much more ;)</p>
        <p>Interested in cooperation? Just...</p>
        <button>CONTACT ME!</button>
      </article>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  background-color: rgba(0, 0, 0, .75);
  padding: 0 10em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
  align-items: center;
  justify-content: center;
  grid-column-gap: 2em;
  /* width: 100vw; */
  min-height: 120vh;
  color: white;

  div {
    /* background-color: green; */
    position: relative;
    h1 {
      text-align: center;
      /* background-color: purple; */
    }
    div {
      width: 60%;
      border: 3px solid purple;
    }
    /* div::after {
      content: "";
      position: absolute;
      top: 10%;
      bottom: -10%;
      left: 10%;
      right: -10%;
      background-color: transparent;
      border: 3px solid purple;
      z-index: 3;
    }
    div::before {
      content: "";
      position: absolute;
      top: 20%;
      bottom: -20%;
      left: 20%;
      right: -20%;
      background-color: transparent;
      border: 3px solid purple;
      z-index: 3;
    } */
    img {
      max-width: 100%;
      /* z-index: 10; */
    }
  }
  article {

   p {
    font-size: 1.8em;
    line-height: 1.5em;
    letter-spacing: 0.05em;
    /* padding: .05em; */
    /* font-family: 'Aldrich', sans-serif; */
  /* font-family: 'Quantico', sans-serif; */
  /* font-family: 'Electrolize', sans-serif; */
  /* font-family: 'Chakra Petch', sans-serif; */
  font-family: 'Turret Road', cursive;
  /* font-family: 'Rationale', sans-serif; */
  /* font-family: 'Iceland', cursive; */
  /* font-weight: 700; */
  }
  button {
    font-family: 'Turret Road', cursive;
    font-size: 1.3rem;
    text-align: center;
    min-width: 8%;
    padding: .5em 1em;
    margin: 1em;
    border-color: black;
    background-color: transparent;
    color: white;
    border-style: none;
    outline: none;
    cursor: pointer;
    transition: .5s;
  }
  button:hover {
    background-color: purple;
    box-shadow: 0 0 20px purple, 0 0 50px purple, 0 0 80px purple, 0 0 110px purple;
  }
}
`

export default About;