import React from 'react';
import redux from '../images/redux.webp';
import svelte from '../images/svelte.webp';
import stylComp from '../images/style-comp.png';
import gsap from '../images/gsap.webp';
import woo from '../images/woo.svg';
import mysql from '../images/mysql.webp';
import vsc from '../images/vsc.svg';
import gimp from '../images/gimp.svg';

import styled from 'styled-components'


const Technologies = () => {

  return (
    <TechnologiesWrapper id="technologies">
      <div className="technologies__section-name">
        <h1>Technologies</h1>
      </div>
      <div className="technologies__item" name="HTML">
        <i className="fab fa-html5"></i>
      </div>
      <div className="technologies__item" name="CSS">
        <i className="fab fa-css3-alt"></i>
      </div>
      <div className="technologies__item" name="SASS">
        <i className="fab fa-sass"></i>
      </div>
      <div className="technologies__item" name="Styled Components">
        <img src={stylComp} alt="Logo" />
      </div>
      <div className="technologies__item" name="GSAP">
        <img src={gsap} alt="Logo" />
      </div>
      <div className="technologies__item" name="JavaScript">
        <i className="fab fa-js-square"></i>
      </div>
      <div className="technologies__item" name="React">
        <i className="fab fa-react"></i>
      </div>
      <div className="technologies__item" name="Redux">
        <img src={redux} alt="Logo"/>
      </div>
      <div className="technologies__item" name="Svelte">
        <img src={svelte} alt="Logo" width="140"/>
      </div>
      <div className="technologies__item" name="Node.js">
        <i className="fab fa-node"></i>
      </div>
      <div className="technologies__item" name="Express">
        <p>Express</p>
      </div>
      <div className="technologies__item" name="Wordpress">
        <i className="fab fa-wordpress-simple"></i>
      </div>
      <div className="technologies__item" name="Woocommerce">
        <img src={woo} alt="Logo"/>
      </div>
      <div className="technologies__item" name="MySQL">
        <img src={mysql} alt="Logo"/>
      </div>
      <div className="technologies__item" name="NPM">
        <i className="fab fa-npm"></i>
      </div>
      <div className="technologies__item" name="Git">
        <i className="fab fa-git-alt"></i>
      </div>
      <div className="technologies__item" name="Visual Studio Code">
        <img src={vsc} alt="Logo" width="150"/>
      </div>
      <div className="technologies__item" name="Gimp">
        <img src={gimp} alt="Logo" width="200"/>
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
  .technologies__item, .technologies__section-name {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid purple;
    height: 100%;
    position: relative;
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
  .technologies__section-name {
    grid-column: 1 / 3;
  }
  .technologies__item {
    cursor: pointer;
  }
  .technologies__item::before {
    content: attr(name);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 2rem;
    padding: 1em;
    letter-spacing: 0.05em;
    background-color: purple;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0;
    transition: opacity .5s;
  }
  .technologies__item:hover::before {
      opacity: 1;
    }
      
`

export default Technologies;