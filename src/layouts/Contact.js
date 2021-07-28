import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import map from '../images/map.webp';

import { device } from '../providers/breakpoints';


const Contact = ({ language, menu }) => {

  const logo = `< UV />`;

  const [contactState, setContactState] = useState();
  

  useEffect(() => {
    fetch(`https://ultra-violet.codes/contact`, {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language: language}),
    })
    .then(response => response.json())
    .then(result => setContactState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language])


  return (
    <ContactWrapper id="contact">
        <div className="contact-section__section-name">
          <h1>{menu !== undefined ? menu.name : 'Contact'}</h1>
        </div>
          {contactState !== undefined ? (
          <>
            <div className="contact-section__address">
              <p>{contactState[0].name}</p>
              <p>{contactState[0].address}</p>
            </div>
            <div className="contact-section__mail">
              <p>{contactState[0].email}</p>
            </div>
          </>
          )
           : null}
        <div className="contact-section__cv">
            <a href="https://ultra-violet.codes/cv.pdf" rel="noreferrer" target="_blank">CV</a>
        </div>
        <div className="contact-section__socials facebook">
          <a href="https://www.facebook.com/violinek123" rel="noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
        </div>
        <div className="contact-section__socials linkedin" rel="noreferrer" target="_blank">
          <a href="https://www.linkedin.com/in/wioleta-polok-44248917/"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="contact-section__map"></div>
        <div className="contact-section__logo">
          <a href="/#">
            <p>{logo}</p>
          </a>
        </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  /* width: 100vw; */
  /* min-height: 90vh; */
  display: grid;
  grid-row-gap: wrap;
  color: ${props => props.theme.textColorOnPurple};
  margin: 15vh 0 10vh 0;
  background-color: ${props => props.theme.textColorOnPurple};
  grid-gap: 1px;
  z-index: 2;
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
  .contact-section__section-name {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    background-color: var(--primary-color);
    z-index: 0;
    @media ${device.mobileXS} {/* max-width: 319px*/
      font-size: 2.5rem;
      top: 25vh;
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileM} { /* min-width: 460px*/

    }
    @media ${device.mobileL} { /* min-width: 640px*/

    }
    @media ${device.tablet} { /* min-width: 768px*/

    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      /* border-top: 1px solid ${props => props.theme.textColorOnPurple}; */
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
  .contact-section__address, .contact-section__mail, .contact-section__cv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: .5em;
    background-color: var(--primary-color);
    z-index: 0;
    width: 100%;
    height: 100%;
    transition: all .5s;
    @media ${device.mobileXS} {/* max-width: 319px*/
      /* grid-column: 1 / 2; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.mobileS} {
      /* grid-column: 1 / 2; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.mobileM} {
      /* grid-column: 1 / 2; */
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      /* grid-column: 1 / 3; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      /* grid-column: 1 / 3; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      /* grid-column: -3 / -1; */
      /* grid-row: 1 / 2; */
    }
    @media ${device.laptopL} {  /* min-width: 1600px*/
      /* grid-column: -3 / -1; */
      /* grid-row: 1 / 2; */
    }
    p, a {
      font-family: var(--primary-font-family);
      font-size: 1.4rem;
      line-height: 1.4em;
      letter-spacing: .05em;
      font-weight: ${props => props.theme.fontWeightOnPurple};
      text-align: center;
      text-transform: uppercase;
    }
    p {
      @media ${device.mobileXS} { /* max-width: 319px*/
        /* font-size: 1rem; */
        /* line-height: 1.4em; */
        /* padding: .5em; */
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        /* font-size: 1.15rem; */
        /* line-height: 1.4em; */
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
        /* white-space: pre-wrap; */
      }
    }
  }
  .contact-section__address {
    @media ${device.mobileXS} {/* max-width: 319px*/
      grid-column: 3 / 5;
      grid-row: 2 / 4;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 3 / 5;
      grid-row: 2 / 4;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      /* grid-column: 3 / 5; */
      /* grid-row: 3 / 4; */
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      /* grid-column: 3 / 5; */
      /* grid-row: 3 / 4; */
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: -1 / -4;
      grid-row: 2 / 3;
      border-bottom: none;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 3 / 6;
      grid-row: 2 / 3;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-column: 3 / 6;
      grid-row: 2 / 3;
    }
    @media ${device.laptopL} {  /* min-width: 1600px*/
      grid-column: 3 / 6;
      grid-row: 2 / 3;
    }
  }
  .contact-section__mail {
    @media ${device.mobileXS} {/* max-width: 319px*/
      grid-column: -1 / -3;
      grid-row: 2 / 4;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: -1 / -3;
      grid-row: 2 / 4;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      /* grid-column: -1 / -4; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      /* grid-column: -1 / -4; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 3 / 5;
      grid-row: 3 / 4;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 3 / 5;
      grid-row: 1 / 2;
      border-bottom: none;
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-column: 3 / 5;
      grid-row: 1 / 2;
    }
    @media ${device.laptopL} {  /* min-width: 1600px*/
      grid-column: 3 / 5;
      grid-row: 1 / 2;
    }
  }
  .contact-section__cv {
    @media ${device.mobileXS} {/* max-width: 319px*/
      grid-column: 1 / 3;
      grid-row: 6 / 8;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / 3;
      grid-row: 6 / 8;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      /* grid-column: 3 / 4; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      /* grid-column: 3 / 4; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      border-bottom: none;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: -2 / -1;
      grid-row: 1 / 2;
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-column: -2 / -1;
      grid-row: 1 / 2;
    }
    @media ${device.laptopL} {  /* min-width: 1600px*/
      grid-column: -2 / -1;
      grid-row: 1 / 2;
    }
    a {
      font-weight: 800;
      color: ${props => props.theme.textColorOnPurple};
      text-decoration: none;
      cursor: none;
      transition: all .5s;
      @media ${device.mobileXS} { /* max-width: 319px*/
        font-size: 2.1rem;
      }
      @media ${device.mobileS} { /* min-width: 320px*/
        font-size: 2.3rem;
      }
      @media ${device.mobileM} { /* min-width: 460px*/
        font-size: 2.3rem;
      }
      @media ${device.mobileL} { /* min-width: 640px*/
        font-size: 2.3rem;
      }
      @media ${device.tablet} { /* min-width: 768px*/
        font-size: 2.5rem;
      }
      @media ${device.laptopS} { /* min-width: 1024px*/
        font-size: 2.5rem;
      }
      @media ${device.laptopM} { /* min-width: 1280px*/
        font-size: 2.5rem;
      }
      @media (min-width: 1460px) { /* min-width: 1460px*/
        font-size: 2.7rem;
      }
      @media ${device.laptopL} { /* min-width: 1600px*/
        font-size: 2.7rem;
      }
    }
    &:hover {
      background-color: ${props => props.theme.background};
    }
    &:hover a {
      font-size: 3.5rem;
      color: var(--primary-color);
    }
  }
  .contact-section__socials {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    transition: all .5s;
    @media ${device.laptopS} { /* min-width: 1024px*/
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      margin: .5em 1.5em;
      text-decoration: none;
      cursor: none;
      transition: all .5s;
      .fab {
        color: ${props => props.theme.textColorOnPurple};
        font-size: 2.5rem;
        transition: all .5s;
      }
    }
  }
  .facebook {
    @media ${device.mobileXS} { /* max-width: 319px*/
      grid-column: 1 / 3;
      grid-row: 2 / 4;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / 3;
      grid-row: 2 / 4;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      /* grid-column: 1 / 2;
      grid-row: 2 / 3; */
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      /* grid-column: 1 / 2; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 5 / 6;
      grid-row: 1 / 2;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      /* grid-column: 1 / 3;
      grid-row: 2 / 3; */
    }
    @media ${device.laptopL} {  /* min-width: 1600px*/
      /* grid-column: 1 / 3; */
      /* grid-row: 2 / 3; */
    }
  }
  .linkedin {
    @media ${device.mobileXS} {/* max-width: 319px*/
      grid-column: 1 / 3;
      grid-row: 4 / 6;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 1 / 3;
      grid-row: 4 / 6;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      /* grid-column: 1 / 2;
      grid-row: 2 / 3; */
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      /* grid-column: 1 / 2; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 6 / 7;
      grid-row: 1 / 2;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      /* grid-column: 1 / 3; */
      /* grid-row: 2 / 3; */
    }
    @media ${device.laptopL} {  /* min-width: 1600px*/
      /* grid-column: 1 / 3; */
      /* grid-row: 2 / 3; */
    }
  }
  .contact-section__socials:hover {
    background-color: ${props => props.theme.background};
  }
  .contact-section__socials:hover .fab {
    font-size: 3.5rem;
    color: var(--primary-color);
  }
  .contact-section__map {
    background-image: url(${map});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    transition: all .5s;
    @media ${device.mobileXS} {/* max-width: 319px*/
      grid-column: 3 / 7;
      grid-row: 4 / 6;
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 3 / 7;
      grid-row: 4 / 6;
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      /* grid-column: 1 / 3; */
      /* grid-row: 3 / 4; */
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      /* grid-column: 1 / 3; */
      /* grid-row: 3 / 4; */
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }
    @media ${device.laptopL} {  /* min-width: 1600px*/
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }
    &:hover {
      background-size: 125%;
      background-position: left bottom;
    }
  }
  .contact-section__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    z-index: 0;
    transition: all .5s;
    @media ${device.mobileXS} {/* max-width: 319px*/
      grid-column: 3 / 7;
      grid-row: 6 / 8;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileS} { /* min-width: 320px*/
      grid-column: 3 / 7;
      grid-row: 6 / 8;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileM} { /* min-width: 460px*/
      /* grid-column: 5 / 7; */
      /* grid-row: 3 / 4; */
    }
    @media ${device.mobileL} { /* min-width: 640px*/
      /* grid-column: 5 / 7; */
      /* grid-row: 3 / 4; */
    }
    @media ${device.tablet} { /* min-width: 768px*/
      grid-column: 5 / 7;
      grid-row: 3 / 4;
    }
    @media ${device.laptopS} { /* min-width: 1024px*/
      grid-column: -1 / -3;
      grid-row: 2 / 3;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.laptopM} { /* min-width: 1280px*/
      grid-column: -1 / -3;
      grid-row: 2 / 3;
    }
    @media ${device.laptopL} {  /* min-width: 1600px*/
      grid-column: -1 / -3;
      grid-row: 2 / 3;
    }
    a {
      text-decoration: none;
      cursor: none;
      p {
        color: ${props => props.theme.textColorOnPurple};
        @media ${device.mobileXS} {/* max-width: 319px*/
          font-size: 2rem;
        }
        @media ${device.mobileS} { /* min-width: 320px*/
          font-size: 3rem;
        }
        @media ${device.mobileM} { /* min-width: 460px*/
          font-size: 3.5rem;
        }
        @media ${device.mobileL} { /* min-width: 640px*/
          font-size: 4.3rem;
        }
        @media ${device.tablet} { /* min-width: 768px*/
          font-size: 5rem;
        }
        @media ${device.laptopS} { /* min-width: 1024px*/
          font-size: 5.2rem;
        }
        @media ${device.laptopM} { /* min-width: 1280px*/

        }
        @media ${device.laptopL} {  /* min-width: 1600px*/

        }
      }
    }
  }
`

export default React.memo(Contact);