import React from 'react';

import styled from 'styled-components'
import back from '../images/back.jpg';

const Main = () => {

  const tagline = "<Coding with {Passion}>"

  return (
    <MainWrapper>
      <div>
        <div className="half-back"></div>
        <p>{tagline}</p>
        <aside>
          {/* <p>>></p> */}
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
    height: 180vh;
    .half-back {
      width: 0;
      height: 0;
      border-bottom: 180vh solid rgba(0, 0, 0, .75);
      border-right: 200vh solid transparent;
    }
    p {
      font-size: 130px;
      font-weight: bold;
      line-height: 160px;
      letter-spacing: 5px;
      width: 45vw;
      position: absolute;
      top: 10%;
      left: 10vw;
    }
    aside {
      width: 100%;
      position: absolute;
      bottom: 4vh;
      right: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      button {
        font-family: 'Turret Road', cursive;
        font-size: 1.3rem;
        color: white;
        text-align: center;
        min-width: 8%;
        padding: .5em 1em;
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