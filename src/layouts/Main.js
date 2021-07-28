import React from 'react';
import styled from 'styled-components';

import { device } from '../providers/breakpoints';


const Main = ({ about }) => {

  const tagline = "<Coding with {Passion}>";


  let grid = [];
  for (let i = 0; i < 90; i++) {
    grid.push(<div key={'grid' + i} className="grid-item"></div>);
  }

  return (
    <MainWrapper id="home">
      {grid}
      <p className="main__tagline">{tagline}</p>
      {about !== undefined ? <p className="main__intro-about">{about[0].intro}</p> : null}
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
  height: 110vh;
  /* width: 100; */
  display: grid;
  grid-row-gap: wrap;
  grid-gap: 1px;
  color: ${props => props.theme.textColor};
  padding: 0 0 15vh 0;
  margin: 0 auto;
  overflow-y: hidden;
  @media ${device.mobileXS} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(auto-fill, 16.28vw);
    grid-auto-rows: 16.28vw;
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(auto-fill, 16.38vw);
    grid-auto-rows: 16.38vw;
  }
  @media ${device.mobileM} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(auto-fill, 16.52vw);
    grid-auto-rows: 16.52vw;
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(auto-fill, 16.52vw);
    grid-auto-rows: 16.52vw;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(auto-fill, 16.56vw);
    grid-auto-rows: 16.56vw;
  }
  @media ${device.laptopS} {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(auto-fill, 14.2vw);
    grid-auto-rows: 14.2vw;
  }
  @media ${device.laptopM} {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(auto-fill, 14.21vw);
    grid-auto-rows: 14.21vw;
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(auto-fill, 14.23vw);
    grid-auto-rows: 14.23vw;
  }
  .grid-item {
    height: 100%;
    background-color: ${props => props.theme.background};
  }
  .main__tagline {
    /* font-weight: 700; */
    /* font-family: 'Manrope', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */
    /* font-family: 'Lato', sans-serif; */
    /* font-family: 'Poppins', sans-serif; */
    /* font-family: 'Ubuntu', sans-serif; */
    /* font-family: 'Mukta', sans-serif; */
    font-family: 'Coda', cursive;
    text-transform: uppercase;
    width: 65vw;
    letter-spacing: .06em;
    color: ${props => props.theme.textColor};
    position: absolute;
    left: 15vw;
    z-index: 0;
    @media ${device.mobileXS} { /* max-width: 319px*/
      font-size: 3.2rem;
      top: 25vh;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      font-size: 4.1rem;
      top: 25vh;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      font-size: 4.7rem;
      top: 30vh;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      font-size: 5.2rem;
    }
    @media ${device.tablet} { /* min-width: 768px*/
      font-size: 5.5rem;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      font-size: 6.3rem;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
  }
  .main__intro-about {
    line-height: 2em;
    letter-spacing: .07em;
    padding: .7em .2em 0 .2em;
    text-transform: uppercase;
    color: ${props => props.theme.text};
    font-weight: ${props => props.theme.fontWeight};
    border-top: 2px solid ${props => props.theme.text};
    white-space: pre-wrap;
    width: 65vw;
    z-index: -1;
    position: absolute;
    top: 67vh;
    left: 15vw;
    z-index: 0;
    @media ${device.mobileXS} { /* max-width: 319px*/
      font-size: 1.15rem;
      top: 65vh;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      font-size: 1.3rem;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      font-size: 1.5rem;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      font-size: 1.6rem;
    }
    @media ${device.tablet} { /* min-width: 768px*/

    }
    @media ${device.laptopS} { /* min-width: 1024px*/

    }
    @media ${device.laptopM} { /* min-width: 1280px*/

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
  }
`

export default React.memo(Main);