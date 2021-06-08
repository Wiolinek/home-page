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
      <div></div>
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
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, .5fr));
  grid-auto-rows: min-content;
  align-items: center;
  justify-content: center;
  grid-gap: 2em;
  /* width: 100vw; */
  /* min-height: 100vh; */
  color: white;
  padding: 10vh 5vw;
    .section-name {
      /* background-color: green; */
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 5em;
      }
    }
    .my-photo {
      /* background-color: red; */
      display: flex;
      /* align-self: flex-start; */
      justify-content: center;
      position: relative;
      /* align-content: center; */
      /* text-align: center; */
      /* width: 60%; */
      /* border: 3px solid purple; */
      
      div {
        /* transform-origin: 50% 50%; */
        /* transform:  translateX(-50%) translateY(-50%) rotate(-90deg); */
        /* height: 10vw; */
        text-align: center;
        /* vertical-align: middle; */
        background-color: purple;
        /* position: absolute; */
        top: 0;
        left: 5vw;
        /* height: 100px; */
        /* width: 400px; */
        /* transform: translate(-40%, 100%) rotate(-90deg); */
        
      }
      img {
        /* position: relative; */
        width: 350px;
        /* border: 3px solid purple; */
        z-index: 10;
      }
    }
    .my-photo::after {
      content: "";
      position: absolute;
      width: 350px;
      max-height: 100%;
      top: 10%;
      /* bottom: -10%; */
      /* left: -10%; */
      right: 10%;
      background-color: purple;
      border: 7px solid purple;
      z-index: 0;
    }
    
  article {
    grid-column: 1 / 3;
    padding: 1em 6em;
    p {
      font-size: 1.8em;
      line-height: 1.5em;
      letter-spacing: 0.05em;
      padding: .05em;
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