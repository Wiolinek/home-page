import React from 'react';
import redux from '../images/redux.svg';
import stylComp from '../images/style-comp.png';
import gsap from '../images/gsap.webp';
import mysql from '../images/mysql.webp';

import styled from 'styled-components'


const Technologies = () => {

  return (
    <TechnologiesWrapper id="technologies">
      <div className="section-name">
        <h1>Technologies</h1>
      </div>
      <div>
        <i className="fab fa-html5"></i>
      </div>
      <div>
        <i className="fab fa-css3-alt"></i>
      </div>
      <div>
        <i className="fab fa-sass"></i>
      </div>
      <div>
        <img src={stylComp} alt="Logo" />
      </div>
      <div>
        <img src={gsap} alt="Logo" />
      </div>
      <div>
        <i className="fab fa-js-square"></i>
      </div>
      <div>
        <i className="fab fa-react"></i>
      </div>
      <div>
        <img src={redux} alt="Logo"/>
      </div>
      <div>
        <i className="fab fa-node"></i>
      </div>
      <div>
        <p>Express</p>
      </div>
      <div>
        <i class="fab fa-wordpress-simple"></i>
      </div>
      <div>
        <img src={mysql} alt="Logo"/>
      </div>
      <div>
        <i class="fab fa-npm"></i>
      </div>
      <div>
        <i class="fab fa-git-alt"></i>
      </div>
      <div>
        <p>GIMP</p>
      </div>
    </TechnologiesWrapper>
  );
}

const TechnologiesWrapper = styled.section`
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
    h1 {
      font-size: 5em;
    }
    i {
      font-size: 10em;
      color: purple;
    }
    img {
      max-width: 50%;
    }
  }
  .section-name {
    grid-column: 1 / 3;
  }
`

export default Technologies;