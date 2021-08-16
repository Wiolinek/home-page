import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { device } from '../providers/breakpoints';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Technologies = ({ language, menu, about }) => {

  const [technologiesState, setTechnologiesState] = useState();
  
  useEffect(() => {
    fetch(`https://ultra-violet.codes/technologies`)
    .then(response => response.json())
    .then(result => setTechnologiesState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language]);

  useEffect(() => {

    gsap.set('.technologies__section-name', {
      opacity: 0,
      x: -200,
    });

    gsap.set('.technologies__semisection', {
      opacity: 0,
      x: -300,
    });

    gsap.set('.technologies__item', {
      opacity: 0,
    });

    gsap.to('.technologies__section-name', {x: 0, opacity: 1, duration: .5, ease: 'none',
      scrollTrigger: {
        trigger: '.technologies',
        start: 'top 95%',
        end:'top 20%',
        scrub: true,
        toggleActions:'play restart complete reverse',
      }
    });

    ScrollTrigger.batch(".technologies__item", {
      interval: .2,
      start: 'top 90%',
      end:'top 50%',
      scrub: true,
      delay: .4,
      onEnter: batch => gsap.to(batch, {opacity: 1, stagger: .2, overwrite: true}),
      onLeaveBack: batch => gsap.set(batch, {opacity: 0, stagger: .2, overwrite: true}),
    });

    gsap.to('.technologies__semisection', { x: 0, opacity: 1, duration: .3, ease: 'none', 
      scrollTrigger: {
        trigger: '.technologies',
        start: '80% 80%',
        end:'80% 30%',
        scrub: true,
        toggleActions:'play restart complete reverse',
      }
    })
  });

  const setRating = (rate) => {
    const rating = [];
    for(let i = 1; i <= 5; i++) {
      if(i <= rate) {
        rating.push(<i key={i} className="fas fa-square"></i>);
      } else {
        rating.push(<i key={i} className="far fa-square"></i>);
      }
    }
    return rating;
  }


  return (
    <TechnologiesWrapper id="technologies" className="technologies">
      <div className="technologies__section-name">
        <h1>{menu !== undefined ? menu.name : 'Technologies'}</h1>
      </div>
      {technologiesState !== undefined && technologiesState.map(technologie => 
        <div key={technologie.name} className="technologies__item" name={technologie.name}>
          <div className="technologies__image">
            <img src={technologie.image} alt={technologie.name}/>
          </div>
          <div className="technologies__rate"><p>Level: </p>{setRating(technologie.rate)}</div>
        </div>
      )}
      <div className="technologies__semisection">
        <div className="technologies__semisection-text">
          <p>{about !== undefined && about[0].technologies}</p>
        </div>
      </div>
    </TechnologiesWrapper>
  );
}


const TechnologiesWrapper = styled.section`
  display: grid;
  grid-row-gap: wrap;
  position: relative;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textColor};
  margin: 0 auto;
  overflow: hidden;
  @media ${device.mobileXS} {
    grid-template-columns: repeat(4, 16.28vw);
    grid-template-rows: repeat(auto-fill, 16.28vw);
    grid-auto-rows: 16.28vw;
    grid-gap: 4vw;
    padding: 15vh 0 0 0;
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(4, 16.38vw);
    grid-template-rows: repeat(auto-fill, 16.38vw);
    grid-auto-rows: 16.38vw;
    grid-gap: 4vw;
    padding: 15vh 0 0 0;
  }
  @media ${device.mobileM} {
    grid-template-columns: repeat(4, 16.52vw);
    grid-template-rows: repeat(auto-fill, 16.52vw);
    grid-auto-rows: 16.52vw;
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(4, 16.52vw);
    grid-template-rows: repeat(auto-fill, 16.52vw);
    grid-gap: 3vw;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, 16.56vw);
    grid-template-rows: repeat(auto-fill, 16.56vw);
    grid-auto-rows: 16.56vw;
  }
  @media ${device.laptopS} {
    grid-template-columns: repeat(auto-fill, 14.2vw);
    grid-template-rows: repeat(auto-fill, 14.2vw);
    grid-auto-rows: 14.2vw;
    grid-gap: 3.5vw;
  }
  @media ${device.laptopM} {
    grid-template-columns: repeat(auto-fill, 14.21vw);
    grid-template-rows: repeat(auto-fill, 14.21vw);
    grid-auto-rows: 14.21vw;
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(auto-fill, 14.23vw);
    grid-template-rows: repeat(auto-fill, 14.23vw);
    grid-auto-rows: 14.23vw;
    grid-gap: 4vw;
  }
  .technologies__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    background-color: ${props => props.theme.background};
    border: 1px solid var(--primary-color);
    padding: .5em;
    @media ${device.mobileXS} {
      grid-column: span 2;
      grid-row: span 2;
    }
    @media ${device.mobileS} {
      grid-column: span 2;
      grid-row: span 2;
    }
    @media ${device.tablet} {
      grid-column: span 1;
      grid-row: span 1;
    }
    .technologies__image {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 78%;
      img {
        @media ${device.mobileXS} {
          width: 50%;
        }
        @media ${device.mobileS} {
          width: 50%;
        }
        @media ${device.mobileM} {
          width: 60%;
        }
        @media ${device.mobileL} {
          width: 70%;
        }
        @media ${device.tablet} {
          width: 50%;
        }
        @media ${device.laptopM} {
          width: 55%;
        }
        @media ${device.laptopL} {
          width: 75%;
        }
      }
    }
  }
  .technologies__rate {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 1.5em 2em 1em 1.5em;
    p {
      font-size: 1.2rem;
      padding-right: .4em;
    }
    i {
      font-size: .8rem;
      color: var(--primary-color);
      padding: .05em;
    }
  }
  .technologies__section-name {
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.mobileXS} {
      grid-column: 1 / -1;
      grid-row: 1 / 2
    }
    @media ${device.mobileS} {
      grid-column: 1 / -1;
      grid-row: 1 / 2
    }
    @media ${device.laptopS} {
      grid-column: 1 / 3;
    }
    h1 {
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
  .technologies__item::before {
    content: attr(name);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    font-weight: ${props => props.theme.fontWeight};
    letter-spacing: .05em;
    padding: .5em;
    background-color: ${props => props.theme.backHover};
    opacity: 0;
    transition: opacity .7s;
  }
  .technologies__item:hover::before {
    opacity: 1;
  }
  .technologies__semisection {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media ${device.mobileXS} {
      grid-column: 1 / -1;
      grid-row: span 4;
    }
    @media ${device.mobileS} {
      grid-column: 1 / -1;
      grid-row: span 4;
    }
    @media ${device.mobileM} {
      grid-row: span 2;
    }
    @media ${device.laptopL} {
      grid-column: 1 / -1;
      grid-row: span 1;
    }
    .technologies__semisection-text {
      background-color: var(--primary-color);
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: ${props => props.theme.fontWeight};
        line-height: 1.4em;
        letter-spacing: .05em;
        text-transform: uppercase;
        padding: 1em 2em;
        background-color: ${props => props.theme.background};
        white-space: pre-wrap;
        border: 1px solid var(--primary-color);
      }
    }
  }
`

export default React.memo(Technologies);