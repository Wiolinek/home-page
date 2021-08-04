import React, { useEffect } from 'react';

import styled from 'styled-components';

import photo from '../images/photo1.jpg';

import { device } from '../providers/breakpoints';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = ({ menu, about }) => {

useEffect(() => {

    gsap.set('.about__section-name', {
      x: +200,
      opacity: 0,
      duration: .5,
    });

    gsap.set('.about__my-photo', {
      y: +250,
      opacity: 0,
      duration: .3,
    });

    gsap.set('.about__text', {
      x: -200,
      opacity: 0,
      duration: .5,
    });

    gsap.set('.about__plan', {
      x: +200,
      opacity: 0,
      duration: .3,
    });

    gsap.set('.about__check-projects-btn', {
      y: +150,
      opacity: 0,
      duration: .3,
    });

    gsap.set('.about__contact-me-btn', {
      y: +150,
      opacity: 0,
      duration: .3,
    });

    ScrollTrigger.batch('.about', {
      onEnter: batch => {
        batch.forEach(element => gsap.to(element.children, {opacity: 1, y: 0, x: 0, ease: 'none',
          scrollTrigger: {
            trigger: element.children,
            start: 'top 85%',
            end:'top 25%',
            scrub: true,
            toggleActions:'play restart complete reverse',
          }
        }))
      },
      once: true,
    });
  }, []);

  
  return (
    <AboutWrapper id="about" className="about">
      <div className="about__section-name">
        <h1>{menu !== undefined ? menu.name : 'About Me'}</h1>
      </div>
      <div className="about__my-photo"></div>
      <div className="about__text">
        {about !== undefined ? <p>{about[0].about}</p> : null}
      </div>
      <div className="about__plan">
        {about !== undefined ? <p>{about[0].plan}</p> : null}
      </div>
      <div className="about__check-projects-btn">
        <a href="#projects">{about !== undefined ? about[0].projectsbtn : 'Check my work'}</a>
      </div>
      <div className="about__contact-me-btn">
        <a href="#contact">{about !== undefined ? about[0].contactbtn : 'Contact Me!'}</a>
      </div>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  display: grid;
  grid-row-gap: wrap;
  grid-gap: 1px;
  width: 100vw;
  color: ${props => props.theme.textColor};
  padding: 15vh 0 15vh 0;
  margin: 0 auto;
  background-color: ${props => props.theme.background};
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
    grid-template-rows: repeat(3, 14.21vw);
    grid-auto-rows: 14.21vw;
    min-height: 100vh;
  }
  @media ${device.laptopL} {
    grid-template-rows: repeat(3, 14.23vw);
    grid-auto-rows: 14.23vw;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s;
  }
  .about__section-name {
    @media ${device.mobileXS} {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
    @media ${device.mobileS} {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
    @media ${device.laptopS} {
      grid-column: -3 / -1;
    }
    h1 {
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
  .about__my-photo {
    background-image: url(${photo});
    background-size: cover;
    background-position: center;
    @media ${device.mobileXS} {
      grid-column: 1 / 4;
      grid-row: 2 / 6;
    }
    @media ${device.mobileS} {
      grid-column: 1 / 4;
      grid-row: 2 / 6;
    }
    @media ${device.tablet} {
      grid-column: 1 / 3;
      grid-row: 2 / 5;
    }
    @media ${device.laptopS} {
      grid-row: 1 / 4;
    }
  }
  .about__text, .about__plan, .about__contact-me {
    display: flex;
    align-items: center;
    height: 100%;
    transition: all .5s;
    p {
      font-family: var(--primary-font-family);
      font-size: 1.4rem;
      font-weight: ${props => props.theme.fontWeight};
      line-height: 1.4em;
      letter-spacing: .05em;
      text-transform: uppercase;
      color: ${props => props.theme.textColor};
      padding: 1em;
      @media (min-width: 1460px) {
        white-space: pre-wrap;
      }
    }
  } 
  .about__text {
    @media ${device.mobileXS} {
      grid-column: 1 / 7;
      grid-row: 6 / 11;
    }
    @media ${device.mobileS} {
      grid-column: 1 / 7;
      grid-row: 6 / 11;
    }
    @media(min-width: 380px) { 
      grid-row: 6 / 10;
    }
    @media ${device.mobileM} {
      grid-row: 6 / 9;
    }
    @media ${device.mobileL} {
      grid-row: 6 / 8;
    }
    @media ${device.tablet} {
      grid-column: 3 / 7;
      grid-row: 2 / 4;
    }
    @media ${device.laptopS} {
      grid-column: 3 / 8;
    }
    @media ${device.laptopM} {
      grid-column: 3 / 6;
      grid-row: 1 / 3;
    }
  }
  .about__plan {
    @media ${device.mobileXS} {
      grid-column: 1 / 7;
      grid-row: 11 / 15;
    }
    @media ${device.mobileS} {
      grid-column: 1 / 7;
      grid-row: 11 / 15;
    }
    @media(min-width: 380px) { 
      grid-row: 10 / 13;
    }
    @media ${device.mobileM} {
      grid-row: 9 / 11;
    }
    @media ${device.mobileL} {
      grid-row: 8 / 9;
    }
    @media ${device.tablet} {
      grid-column: 3 / 7;
      grid-row: 4 / 6;
    }
    @media ${device.laptopS} {
      grid-column: 1 / -1;
      grid-row: 4 / 5;
    }
    @media ${device.laptopM} {
      grid-column: 6 / 8;
      grid-row: 2 / 4;
    }
  }
  .about__contact-me-btn, .about__check-projects-btn {
    border: 1px solid ${props => props.theme.textColor};
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      font-family: var(--primary-font-family);
      font-weight: ${props => props.theme.fontWeightOnPurple};
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      line-height: 1.4em;
      color: ${props => props.theme.textColor};
      border-style: none;
      outline: none;
      transition: all .5s;
      @media ${device.mobileXS} {
        font-size: 1.5rem;
      }
      @media ${device.mobileS} {
        font-size: 1.55rem;
        padding: 2em;
      }
      @media ${device.mobileM} {
        font-size: 1.6rem;
        padding: .5em;
      }
      @media ${device.mobileL} {
        font-size: 1.65rem;
      }
      @media ${device.laptopL} {
        font-size: 1.8rem;
      }
    }
    &:hover {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      a {
        font-weight: ${props => props.theme.fontWeightOnPurple};
        color: ${props => props.theme.textColorOnPurple};
      }
    }
  }
  .about__contact-me-btn {
    @media ${device.mobileXS} {
      grid-column: -3 / -1;
      grid-row: 4 / 6;
    }
    @media ${device.mobileS} {
      grid-column: -3 / -1;
      grid-row: 4 / 6;
    }
    @media ${device.tablet} {
      grid-column: 1 / 2;
      grid-row: 6 / 7;
    }
    @media ${device.laptopS} {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }
    @media ${device.laptopM} {
      grid-column: 5 / 6;
      grid-row: 3 / 4;
    }
  }
  .about__check-projects-btn {
    @media ${device.mobileXS} {
      grid-column: -3 / -1;
      grid-row: 2 / 4;
    }
    @media ${device.mobileS} {
      grid-column: -3 / -1;
      grid-row: 2 / 4;
    }
    @media ${device.tablet} {
      grid-column: 2 / 3;
      grid-row: 6 / 7;
    }
    @media ${device.laptopS} {
      grid-column: 4 / 5;
      grid-row: 1 / 2;
    }
    @media ${device.laptopM} {
      grid-column: 4 / 5;
      grid-row: 3 / 4;
    }
  }
`

export default React.memo(About);