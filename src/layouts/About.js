import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

import photo from '../images/photo1.jpg';

import { device } from '../providers/breakpoints';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = ({ menu, about }) => {

  // const aboutWrapper = useRef(null);

    // useEffect(() => {
  
    //     gsap.fromTo(aboutWrapper.current, {y: '+=150', autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 2, stagger: .5,
    //       scrollTrigger: {
    //         trigger: aboutWrapper.current,
    //         start:'top 60%',
    //         end:'bottom bottom',
    //         scrub: 1,
    //         toggleActions:'play restart complete reverse',
    //       }
    //     })
    // }, [])

    useEffect(() => {

      const aboutText = gsap.utils.toArray('.about__text');
      const aboutPlan = gsap.utils.toArray('.about__plan');
      const aboutContactMe = gsap.utils.toArray('.about__contact-me');
      const texts = [aboutText, aboutPlan, aboutContactMe].flat();
      console.log(texts);

  
      gsap.set(texts, {y: '+80', autoAlpha: 0});
      // gsap.set(aboutPlan, {y: '+80', autoAlpha: 0});
      // gsap.set(aboutContactMe, {x: '-80', autoAlpha: 0});

      ScrollTrigger.batch(texts, {
        start:'top 70%',
        end:'bottom bottom',
        scrub: 1,
        onEnter: batch => gsap.to(batch, {y: 0, x: 0, autoAlpha: 1, stagger: .3, ease: 'linear'}),
        onLeaveBack: batch => gsap.to(batch, {y: '+80', autoAlpha: 0, stagger: .3, ease: 'linear'}),
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

  
  return (
    <AboutWrapper id="about">
      <div className="my-photo"></div>
      <div className="section-name">
        <h1>{menu !== undefined ? menu.name : 'About Me'}</h1>
      </div>
      {/* <motion.article className="about__text" animate={{ opacity: 1, transition:{ duration: 2 }}} initial={{ opacity: 0 }} > */}
      {/* <motion.article className="about__text" variants={textAnim} initial="hidden" animate="show"> */}
      <article className="about__text">
        {about !== undefined ? <p>{about[0].about}</p> : null}
      </article>
      <article className="about__plan">
        {about !== undefined ? <p>{about[0].plan}</p> : null}
      </article>
      <article className="about__contact-me">
        {about !== undefined ? <p>{about[0].contactme}</p> : null}
      </article>
      <div className="contact-me-btn">
        <a href="#contact">{about !== undefined ? about[0].button : 'Contact Me!'}</a>
      </div>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  /* width: 100%; */
  display: grid;
  grid-row-gap: wrap;
  color: ${props => props.theme.textColorOnPurple};
  padding: 15vh 0 0 0;
  margin: 0 auto;
  background-color: var(--primary-color);
  grid-gap: 1px;
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
    grid-template-rows: repeat(3, 14.21vw);
    grid-auto-rows: 14.21vw;
    min-height: 100vh;
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 14.23vw);
    grid-auto-rows: 14.23vw;
    min-height: 110vh;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: all .5s;
  }
  .section-name {
    border: 1px solid ${props => props.theme.textColorOnPurple};
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      grid-column: 1 / -1;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: -3 / -1;
      grid-row: 1 / 2;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
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
  }
  .my-photo {
    background-image: url(${photo});
    background-size: cover;
    background-position: center;
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: 1 / 4;
      grid-row: 2 / 6;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / 4;
      grid-row: 2 / 6;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      grid-column: 1 / 4;
      grid-row: 2 / 6;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      grid-column: 1 / 4;
      grid-row: 2 / 6;
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 1 / 3;
      grid-row: 2 / 5;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 1 / 3;
      grid-row: 1 / 4;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
    img {
      width: 500px;
      z-index: 10;
    }
  }
  .about__text, .about__plan, .about__contact-me {
    display: flex;
    align-items: center;
    height: 100%;
    transition: all .5s;
    @media ${device.mobileXS} { /* max-width: 319px*/

    }
    @media ${device.mobileS} { /* min-width: 320px*/

    }
    @media ${device.mobileM} { /* min-width: 460px*/

    }
    @media ${device.mobileL} { /* min-width: 640px*/

    }
    @media ${device.tablet} { /* min-width: 768px*/

    }
    @media ${device.laptopS} { /* min-width: 1024px*/

    }
    @media ${device.laptopM} { /* min-width: 1280px*/

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
    p {
      font-family: var(--primary-font-family);
      font-size: 1.4rem;
      padding: 1em;
      line-height: 1.4em;
      letter-spacing: .05em;
      text-transform: uppercase;
      color: ${props => props.theme.textColorOnPurple};
      font-weight: ${props => props.theme.fontWeightOnPurple};
      @media ${device.mobileXS} { /* max-width: 319px*/
        /* font-size: 1.3rem; */
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        /* font-size: .9rem; */
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        /* font-size: 1.2rem; */
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        /* font-size: 1.3rem; */
      }
      @media ${device.tablet} { /* min-width: 768px*/
        /* font-size: 1.3rem; */
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        /* font-size: 1.1rem; */
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        /* font-size: 1.2rem; */
      }
      @media (min-width: 1460px) { /* min-width: 1460px*/
        /* font-size: 1.25rem; */
        white-space: pre-wrap;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/
        /* font-size: 1.3rem; */
        
      }
    }
  } 
  .about__text {
    /* background-color: pink; */
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: 1 / 7;
      grid-row: 6 / 11;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / 7;
      grid-row: 6 / 11;
    }
    @media(min-width: 380px) { 
      grid-column: 1 / 7;
      grid-row: 6 / 10;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      grid-column: 1 / 7;
      grid-row: 6 / 9;
    }
    @media(min-width: 530px) { 
      grid-column: 1 / 7;
      grid-row: 6 / 9;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      grid-column: 1 / 7;
      grid-row: 6 / 8;
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 3 / 7;
      grid-row: 2 / 4;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 3 / 8;
      grid-row: 2 / 4;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-column: 3 / 6;
      grid-row: 1 / 3;
    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
  }
  .about__plan {
    /* background-color: green; */
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: 1 / 7;
      grid-row: 11 / 15;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / 7;
      grid-row: 11 / 15;
    }
    @media(min-width: 380px) { 
      grid-column: 1 / 7;
      grid-row: 10 / 13;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      grid-column: 1 / 7;
      grid-row: 9 / 11;
    }
    @media(min-width: 530px) { 
      grid-column: 1 / 7;
      grid-row: 9 / 11;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      grid-column: 1 / 7;
      grid-row: 8 / 9;
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 3 / 7;
      grid-row: 4 / 6;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 1 / -1;
      grid-row: 4 / 5;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-column: 6 / 8;
      grid-row: 2 / 4;

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
  }
  .about__contact-me {
    /* background-color: blue; */
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: -4 / -1;
      grid-row: 2 / 4;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: -4 / -1;
      grid-row: 2 / 4;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      grid-column: -4 / -1;
      grid-row: 2 / 4;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      grid-column: -4 / -1;
      grid-row: 2 / 4;
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 2 / 6;
      grid-row: 6 / 7;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 4 / 6;
      grid-row: 1 / 2;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-column: 3 / 5;
      grid-row: 3 / 4;

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
  }
  .contact-me-btn {
    border: 1px solid ${props => props.theme.textColorOnPurple};
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: -3 / -1;
      grid-row: 4 / 6;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: -3 / -1;
      grid-row: 4 / 6;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      grid-column: -3 / -1;
      grid-row: 4 / 6;
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      grid-column: -3 / -1;
      grid-row: 4 / 6;
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 1 / 2;
      grid-row: 6 / 7;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-column: 5 / 6;
      grid-row: 3 / 4;

    }
    @media ${device.laptopL} { /* min-width: 1600px*/

    }
    a {
      font-family: var(--primary-font-family);
      padding: .5em;
      line-height: 1.4em;
      color: ${props => props.theme.textColorOnPurple};
      font-weight: ${props => props.theme.fontWeightOnPurple};
      text-align: center;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-style: none;
      outline: none;
      text-decoration: none;
      text-transform: uppercase;
      transition: all .5s;
      @media ${device.mobileXS} { /* max-width: 319px*/
        font-size: 1.5rem;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        font-size: 1.55rem;
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        font-size: 1.6rem;
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        font-size: 1.65rem;
      }
      @media ${device.tablet} { /* min-width: 768px*/
        /* font-size: 1.7rem; */
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        
      }
      @media ${device.laptopM} { /* min-width: 1280px*/

      }
      @media ${device.laptopL} { /* min-width: 1600px*/
        font-size: 1.8rem;
      }
      &:hover {
        background-color: ${props => props.theme.background};
        color: var(--primary-color);
        font-size: 2.1rem;
        padding: .5em;
      }
    } 
  }
`

export default React.memo(About);