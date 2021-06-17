import React from 'react';
import photo from '../images/photo1.jpg';

import styled from 'styled-components'


const About = () => {



  return (
    <AboutWrapper id="about">
      <div className="my-photo">
          <img src={photo} alt="Logo" />
      </div>
      <div className="section-name">
        <h1>About Me</h1>
      </div>
      {/* <div></div> */}
      <article>
        <p>Hello, my name is Wiola and I'm a junior front end developer.</p>
        <p>I started my journey with programming in March 2020 and all you can see here is effect of my hard work during last year.</p>
        <p>I based my knowledge and skills on on-line courses and tutorials and official documentation.</p>
        <p>With your little help I am sure I can achieve much, much more ;)</p>
        <p>Interested in cooperation? Just...</p>
      </article>
      <div className="contact-me-btn">
        <a href="#contact">Contact Me!</a>
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
  .my-photo {
    grid-column: 1 / 3;
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
    
  article {
    grid-column: 1 / 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .5em;
    border: 3px solid purple;
    height: 100%;
    p {
      font-size: 1.5rem;
      line-height: 1.5em;
      letter-spacing: 0.05em;
      padding: .3em;
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
    a {
      grid-column: 4 / 5;
      font-family: 'Turret Road', cursive;
      font-size: 1.3rem;
      padding: .5em 1em;
      margin: 1em;
      border-color: black;
      background-color: transparent;
      color: white;
      border-style: none;
      outline: none;
      text-decoration: none;
      cursor: pointer;
      transition: .5s;
    }
    a:hover {
      background-color: purple;
      box-shadow: 0 0 20px purple, 0 0 50px purple, 0 0 80px purple, 0 0 110px purple;
    }
  }
`

export default About;