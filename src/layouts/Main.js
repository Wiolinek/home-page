import React from 'react';

import styled from 'styled-components'
// import back from '../images/back.jpg';

const Main = ({ changeLanguageHandler }) => {

  const tagline = "<Coding with {Passion}>";
  const logo = `< UV />`;

  return (
    <MainWrapper id="home">
      <div>
        <div className="logo">
          <p>{logo}</p>
        </div>
        <div className="half-back"></div>
        <p>{tagline}</p>
        <aside>
          <button onClick={changeLanguageHandler}>eng</button>
          <button onClick={changeLanguageHandler}>cz</button>
          <button onClick={changeLanguageHandler}>pl</button>
        </aside>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
  min-height: 100vh;
  color: white;
  div {
    .logo {
      color: white;
      font-size: .5rem;
      position: absolute;
      top: 0;
      left: 0;
    }
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
      letter-spacing: 0.05em;
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
        text-transform: uppercase;
        background-color: transparent;
        border-style: none;
        outline: none;
        cursor: pointer;
        transition: all .5s;
      }
      button:hover {
        background-color: purple;
        box-shadow: 0 0 20px purple, 0 0 50px purple, 0 0 80px purple, 0 0 110px purple;
      }
    }
  }
`

export default Main;