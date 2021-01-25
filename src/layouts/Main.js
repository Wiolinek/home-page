import React from 'react';

import styled from 'styled-components'
import back from '../images/back.jpg';

const Main = () => {

  const tagline = "<Coding with {Passion}>"

  return (
    <MainWrapper>
      <nav>
        <li>About Me</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>Contact</li>
      </nav>
      <section>
        <p>{tagline}</p>
      </section>
      <aside>
        <p>>></p>
        <button>ENG</button>
        <button>CZ</button>
        <button>PL</button>
      </aside>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  background: url(${back});
  background-size: cover;
  width: 100vw;
  max-height: 100vh;
  /* font-family: 'Aldrich', sans-serif; */
  /* font-family: 'Quantico', sans-serif; */
  /* font-family: 'Electrolize', sans-serif; */
  /* font-family: 'Chakra Petch', sans-serif; */
  font-family: 'Turret Road', cursive;
  /* font-family: 'Rationale', sans-serif; */
  /* font-family: 'Iceland', cursive; */
  /* font-weight: 700; */
  color: white;
  overflow: hidden;

  nav {
    display: flex;
    list-style: none;
    position: absolute;
    top: 2vh;
    right: 4vw;
    min-width: 30%;
  }

  li {
    font-size: 1.3rem;
    min-width: 4em;
    padding: 1vh 2vw;
    margin: 1.8vh 2vw;
  }

  section {
    width: 45vw;
    position: absolute;
    top: 18vh;
    left: 15vw;
  }

  section p {
    font-size: 90px;
    line-height: 180px;
    letter-spacing: 5px;
  }

  aside {
    width: 95vw;
    position: absolute;
    bottom: 4vh;
    right: 1vw;
  }

  aside p {
    width: 10vw;
    padding: 1vh .2vw;
    margin: 0 0 10vh auto;
    font-size: 90px;
    text-align: center;
  }

  button {
    /* padding: 1vh .2vw; */
    /* margin: 1vh .3vw; */
    margin: 5px;
    /* border-color: black; */
    background-color: transparent;
    color: white;
    border-style: none;
    min-width: 10vw;
    outline: none;
    font-size: 18px;
  }

  button:hover {
    cursor: pointer;
  }

`

export default Main;