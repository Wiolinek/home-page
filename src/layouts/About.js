import React from 'react';
import photo from '../images/photo1.jpg';

import styled from 'styled-components'


const About = () => {

  return (
    <AboutWrapper>
      <div><p>About Me</p></div>
      <div><img src={photo} alt="Logo" /></div>
      <article>
        <p>Hello, my name is Wiola and I'm a junior front end developer.<br />I started my journey with programming in March 2020 and all you can see here is effect of my hard work during last year.<br />I based my knowledge and skills on on-line courses and tutorials and official documentation.<br />With your little help I am sure I can achieve much, much more ;)<br />Interested in cooperation? Just...</p>
        <button>Contact Me!</button>
        <div></div>
      </article>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  

  div::first-child {

  }

  div p {
    transform: rotate(-90deg);
    text-align: center;
  }

  div img {
    max-width: 60%;
  }

  article {

  }

  article p {
    padding: 1vh 2vw;
    font-size: 1.9rem;
    line-height: 1.5em;
    letter-spacing: 0.05em;
    /* font-family: 'Aldrich', sans-serif; */
  /* font-family: 'Quantico', sans-serif; */
  /* font-family: 'Electrolize', sans-serif; */
  /* font-family: 'Chakra Petch', sans-serif; */
  font-family: 'Turret Road', cursive;
  /* font-family: 'Rationale', sans-serif; */
  /* font-family: 'Iceland', cursive; */
  /* font-weight: 700; */
  }
`

export default About;