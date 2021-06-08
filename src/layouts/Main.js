import React from 'react';

import styled from 'styled-components'
import back from '../images/back.jpg';

const Main = () => {

  const tagline = "<Coding with {Passion}>"

  return (
    <MainWrapper id="home">
      <div>
        <div className="half-back"></div>
        <p>{tagline}</p>
        <aside>
          <button>ENG</button>
          <button>CZ</button>
          <button>PL</button>
        </aside>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
  min-height: 100vh;
  color: white;
  div {
    .half-back {
      width: 0;
      height: 0;
      border-bottom: 115vh solid rgba(0, 0, 0, .75);
      border-right: 100vw solid transparent;
    }
    p {
      font-size: 8em;
      font-weight: bold;
      line-height: 1.5em;
      letter-spacing: 5px;
      width: 57vw;
      position: absolute;
      top: 25vh;
      left: 15vw;
    }
    aside {
      width: 100%;
      position: absolute;
      bottom: 2vh;
      right: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-height: 7vh;
      button {
        font-family: 'Turret Road', cursive;
        font-size: 1.5rem;
        color: white;
        text-align: center;
        padding: 0 .8em;
        margin: 0 1em;
        border-color: black;
        background-color: transparent;
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
  }
`

export default Main;