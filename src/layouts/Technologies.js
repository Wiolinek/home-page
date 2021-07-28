import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { device } from '../providers/breakpoints';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Technologies = ({ language, menu }) => {

  const [technologiesState, setTechnologiesState] = useState();

  
  useEffect(() => {
    fetch(`https://ultra-violet.codes/technologies`)
    .then(response => response.json())
    .then(result => setTechnologiesState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language]);

  useEffect(() => {

    const technologies = gsap.utils.toArray('.technologies__item');


    gsap.set(technologies, {y: '+0', autoAlpha: 1});
    // gsap.set(aboutPlan, {y: '+80', autoAlpha: 0});
    // gsap.set(aboutContactMe, {x: '-80', autoAlpha: 0});

    ScrollTrigger.batch(technologies, {
      // start:'top center',
      // end:'bottom bottom',
      interval: 1,
      batchMax: 3,
      scrub: 1,
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.1, grid: [1, 3]}, overwrite: true}),
      onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.1, overwrite: true}),
      onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 100, overwrite: true}),
    })

    // ScrollTrigger.batch(aboutPlan, {
    //   start:'top 70%',
    //   end:'bottom bottom',
    //   scrub: 1,
    //   onEnter: batch => gsap.to(batch, {y: 0, x: 0, autoAlpha: 1, stagger: .5, duration: .8, ease: 'linear', delay: -.5}),
    //   onLeaveBack: batch => gsap.to(batch, {y: '+80', autoAlpha: 0, stagger: .5, duration: .8, ease: 'linear'}),
    // })

    // ScrollTrigger.batch(aboutContactMe, {
    //   start:'top 70%',
    //   end:'bottom bottom',
    //   scrub: 1,
    //   onEnter: batch => gsap.to(batch, {x: 0, autoAlpha: 1, duration: .5}),
    //   onLeaveBack: batch => gsap.to(batch, {x: '-80', autoAlpha: 0, duration: .5}),
    // })
  });

  const setRating = (rate) => {
    const rating = [];
    for(let i = 1; i <= 5; i++) {
      if(i <= rate) {
        rating.push(<i className="fas fa-square"></i>);
      } else {
        rating.push(<i className="far fa-square"></i>);
      }
    }
    return rating;
  }


  return (
    <TechnologiesWrapper id="technologies">
      <div className="technologies__section-name">
        <h1>{menu !== undefined ? menu.name : 'Technologies'}</h1>
      </div>
      {technologiesState !== undefined && technologiesState.map(technologie => 
        <div key={technologie.id} className="technologies__item" name={technologie.name}>
          <div className="technologies__image">
            <img src={technologie.image} alt={technologie.name}/>
          </div>
          <div className="technologies__rate"><p>Level: </p>{setRating(technologie.rate)}</div>
        </div>
      )}
      <div className="technologies__semisection">
        <div>
          <p>Obecnie uczestniczę w rocznym kursie JavaScript ukierunkowanym na technologie backendowe, gdzie poznaję od podstaw Node.js, Express.js, MySQL, MongoDB, TypeScript oraz React. Niektóre z tych technologii zastosowałam już w moich projektach.</p>
        </div>
      </div>
    </TechnologiesWrapper>
  );
}

const TechnologiesWrapper = styled.section`
  /* width: 100vw; */
  display: grid;
  /* grid-template-columns: repeat(auto-fill, 14.2vw); */
  /* grid-template-rows: repeat(4, 14.2vw); */
  grid-row-gap: wrap;
  /* grid-auto-rows: 14.2vw; */
  grid-gap: 1px;
  color: ${props => props.theme.textColor};
  align-items: center;
  @media ${device.mobileXS} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(auto-fill, 16.28vw);
    grid-auto-rows: 16.28vw;
    padding: 15vh 0 30vh 0;
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(auto-fill, 16.38vw);
    grid-auto-rows: 16.38vw;
    padding: 15vh 0 25vh 0;
  }
  @media ${device.mobileM} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(auto-fill, 16.52vw);
    grid-auto-rows: 16.52vw;
    padding: 15vh 0 15vh 0;
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
    grid-template-rows: repeat(4, 14.2vw);
    grid-auto-rows: 14.2vw;
  }
  @media ${device.laptopM} {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 14.21vw);
    grid-auto-rows: 14.21vw;
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 14.23vw);
    grid-auto-rows: 14.23vw;
  }
  .technologies__item, .technologies__section-name {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.background};
    height: 100%;
    position: relative;
    h1 {
      @media ${device.mobileXS} { /* max-width: 319px*/
        font-size: 4rem;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        font-size: 4rem;
      }
      @media ${device.mobileM} { /* min-width: 460px*/

      }
      @media ${device.mobileL} { /* min-width: 640px*/

      }
      @media ${device.tablet} { /* min-width: 768px*/

      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        font-size: 3.2rem;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        font-size: 3.5rem;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/
        font-size: 4rem;
      }
    }
    .technologies__image {
      display: flex;
      justify-content: center;
      align-items: center;
      @media ${device.mobileXS} { /* max-width: 319px*/

      }
      @media ${device.mobileS} { /* min-width: 320px*/
        height: 78%;
      }
      @media ${device.mobileM} { /* min-width: 460px*/

      }
      @media ${device.mobileL} { /* min-width: 640px*/

      }
      @media ${device.tablet} { /* min-width: 768px*/

      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        height: 75%;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        height: 75%;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/
        height: 78%;
      }
      img {
        @media ${device.mobileXS} { /* max-width: 319px*/
          width: 58%;
        }
        @media ${device.mobileS} { /* min-width: 320px*/
          width: 58%;
        }
        @media ${device.mobileM} { /* min-width: 460px*/

        }
        @media ${device.mobileL} { /* min-width: 640px*/

        }
        @media ${device.tablet} { /* min-width: 768px*/
          width: 58%;
        }
        @media ${device.laptopS} { /* min-width: 1024px*/
          width: 58%;
        }
        @media ${device.laptopM} { /* min-width: 1280px*/
          width: 63%;
        }
        @media ${device.laptopL} { /* min-width: 1600px*/
          width: 75%;
        }
      }
    }
  }
  .technologies__item {
    flex-direction: column;
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: span 2;
      grid-row: span 2;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: span 2;
      grid-row: span 2;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      grid-column: span 2;
      grid-row: span 2;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      grid-column: span 2;
      grid-row: span 2;
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: span 1;
      grid-row: span 1;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      
    }
    @media ${device.laptopM} { /* min-width: 1280px*/

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
    .technologies__rate {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      padding: 1em 2em 1em 1.5em;
      p {
        font-size: 1.2rem;
      }
      i {
        font-size: .8rem;
        color: var(--primary-color);
      }
    }
  }
  .technologies__section-name {
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: 1 / -1;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / -1;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      grid-column: 1 / -1;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      grid-column: 1 / -1;
    }
    @media ${device.tablet} { /* min-width: 768px*/

    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 1 / 3;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
  }
  .technologies__item::before {
    content: attr(name);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 2rem;
    font-weight: ${props => props.theme.fontWeight};
    padding: .5em;
    letter-spacing: .05em;
    background-color: ${props => props.theme.backHover};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0;
    transition: opacity .6s;

  }
  .technologies__item:hover::before {
      opacity: 1;
  }
  .technologies__semisection {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5em;
    background-color: ${props => props.theme.background};
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: 1 / -1;
      /* grid-row: 10 / 11; */
      padding: 2em;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / -1;
      /* grid-row: 10 / 11; */
      padding: 2em;
    }
    @media ${device.mobileM} { /* min-width: 460px*/

    }
    @media ${device.mobileL} { /* min-width: 640px*/
      padding: 3em;
    }
    @media ${device.tablet} { /* min-width: 768px*/

    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      /* grid-column: 1 / -1; */
      /* grid-row: -1 / -2; */
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      /* grid-column: 1 / -1; */
      /* grid-row: -1 / -2; */
      padding: 5em;
    }
    @media ${device.laptopL} { /* min-width: 1600px*/
      /* grid-column: 1 / -1; */
      /* grid-row: -1 / -2; */
      padding: 5em;
    }
    div {
      position: relative;
      background-color: var(--primary-color);
      transform: translate(0%, 52%);
      p {
        min-height: 14.2vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        padding: 1em;
        line-height: 1.4em;
        letter-spacing: .05em;
        text-transform: uppercase;
        padding: 1em 2em;
        font-weight: ${props => props.theme.fontWeight};
        background-color: ${props => props.theme.background};
        white-space: pre-wrap;
        border: 1px solid var(--primary-color);
        @media ${device.mobileXS} { /* max-width: 319px*/
        /* font-size: 1.4rem; */
        /* line-height: 1.4em; */
        /* padding: .5em; */
        }
        @media ${device.mobileS} { /* min-width: 320px*/
          /* font-size: 1.15rem; */
          /* line-height: 1.5em; */
          /* padding: .5em; */
        }
        @media ${device.mobileM} { /* min-width: 460px*/
          /* font-size: 1.35rem; */
          /* line-height: 1.65em; */
        }
        @media ${device.mobileL} { /* min-width: 640px*/
          /* font-size: 1.3rem; */
          /* line-height: 1.6em; */
        }
        @media ${device.tablet} { /* min-width: 768px*/
          /* font-size: 1.3rem; */
          /* line-height: 1.6em; */
          /* padding: 1.5em; */
        }
        @media ${device.laptopS} { /* min-width: 1024px*/
          /* font-size: 1.15rem; */
          /* line-height: 1.4em; */
        }
        @media ${device.laptopM} { /* min-width: 1280px*/
          /* font-size: 1.2rem; */
          /* line-height: 1.5em; */
        }
        @media (min-width: 1460px) { /* min-width: 1460px*/
          /* font-size: 1.25rem; */
          /* line-height: 1.6em; */
        }
        @media ${device.laptopL} { /* min-width: 1600px*/
          /* font-size: 1.3rem; */
          /* line-height: 1.7em; */
          white-space: pre-wrap;
        }
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }   
  }
  
`

export default React.memo(Technologies);