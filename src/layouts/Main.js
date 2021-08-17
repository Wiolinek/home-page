import React, { useEffect } from 'react';
import styled from 'styled-components';

import { device } from '../providers/breakpoints';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Main = ({ about }) => {

  const tagline = "<Coding with {Passion}>";

  let grid = [];
  for (let i = 0; i < 90; i++) {
    grid.push(<div key={'grid' + i} className="grid-item"></div>);
  }

  useEffect(() => {

    gsap.set('.main__welcome', {
      y: +200,
      opacity: 0,
    });
  
    gsap.to('.main__grid-container', {
      duration: 2.5,
      x: 500,
      scrollTrigger: {
        trigger: '.grid-item',
        start: '65% top',
        scrub: 1.5,
        pin: '.main',
      },
      scale: 5,
      opacity: 0,
    });

    gsap.to('.main__welcome', {y: 0, ease: 'none',
      scrollTrigger: {
        trigger: '.main__welcome',
        start: 'top 95%',
        end:'top 50%',
        scrub: true,
        toggleActions:'play restart complete reverse',
      },
      opacity: 1,
    });
  }, [])

  return (
    <MainWrapper id="home" className="main">
      <div className="main__grid-container">
      {grid}
        <p className="main__tagline">{tagline}</p>
        {about !== undefined ? <p className="main__intro-about">{about[0].intro}</p> : null}
      </div>
      <div className="main__welcome">
        <p>Welcome to my UV World :)</p>
      </div>
    </MainWrapper> 
  );
}

const MainWrapper = styled.section`
.main__grid-container {
  display: grid;
  grid-row-gap: wrap;
  grid-gap: 1px;
  height: 120vh;
  color: ${props => props.theme.textColor};
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
    grid-template-rows: repeat(auto-fill, 16.52vw);
    grid-auto-rows: 16.52vw;
  }
  @media ${device.mobileL} {
    grid-template-rows: repeat(auto-fill, 16.52vw);
    grid-auto-rows: 16.52vw;
  }
  @media ${device.tablet} {
    grid-template-rows: repeat(auto-fill, 16.56vw);
    grid-auto-rows: 16.56vw;
  }
  @media ${device.laptopS} {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(auto-fill, 14.2vw);
    grid-auto-rows: 14.2vw;
  }
  @media ${device.laptopM} {
    grid-template-rows: repeat(auto-fill, 14.21vw);
    grid-auto-rows: 14.21vw;
  }
  @media ${device.laptopL} {
    grid-template-rows: repeat(auto-fill, 14.22vw);
    grid-auto-rows: 14.22vw;
  }
  .grid-item {
    height: 100%;
    background-color: ${props => props.theme.background};
    overflow: hidden;
  }
  .main__tagline {
    position: absolute;
    left: 15vw;
    font-family: 'Coda', cursive;
    text-transform: uppercase;
    letter-spacing: .06em;
    color: ${props => props.theme.textColor};
    z-index: 0;
    @media ${device.mobileXS} {
      top: 25vh;
      font-size: 3.2rem;
      width: 65vw;
    }
    @media ${device.mobileS} {
      top: 25vh;
      font-size: 4.1rem;
      width: 70vw;
    }
    @media ${device.mobileM} {
      top: 30vh;
      font-size: 4.7rem;
    }
    @media ${device.mobileL} {
      font-size: 5rem;
    }
    @media ${device.tablet} {
      font-size: 5.2rem;
    }
    @media ${device.laptopS} {
      width: 65vw;
      font-size: 6rem;
    }
    @media ${device.laptopL} {
      width: 55vw;
      font-size: 6.3rem;
    }
  }
  .main__intro-about {
    position: absolute;
    top: 67vh;
    left: 15vw;
    width: 65vw;
    font-weight: ${props => props.theme.fontWeight};
    color: ${props => props.theme.text};
    text-transform: uppercase;
    line-height: 2em;
    letter-spacing: .07em;
    padding: .7em .2em 0 .2em;
    border-top: 2px solid ${props => props.theme.text};
    white-space: pre-wrap;
    z-index: 0;
    @media ${device.mobileXS} {
      top: 65vh;
      font-size: 1.15rem;
    }
    @media ${device.mobileS} {
      font-size: 1.3rem;
    }
    @media ${device.mobileM} {
      font-size: 1.5rem;
    }
    @media ${device.mobileL} {
      font-size: 1.6rem;
    }
  }
}
  .main__welcome {
    position: absolute;
    bottom: 10vh;
    width: 100%;
    text-align: center;
    z-index: -1;
    p {
      font-family: 'Coda', cursive;
      color: ${props => props.theme.textColorOnPurple};
      @media ${device.mobileXS} {
        font-size: 4rem;
      }
      @media ${device.mobileS} {
        font-size: 4rem;
      }
      @media ${device.laptopS} {
        font-size: 3.2rem;
      }
      @media ${device.laptopM} {
        font-size: 3.5rem;
      }
      @media ${device.laptopL} {
        font-size: 4rem;
      }
    }
  }
`

export default React.memo(Main);