import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import map from '../images/map.webp';

import { device } from '../providers/breakpoints';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Contact = ({ language, menu }) => {

  const logo = `< UV />`;

  const [contactState, setContactState] = useState();
  const [contactLinksState, setContactLinksState] = useState();

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
  }, [language]);


  useEffect(() => {
    fetch(`https://ultra-violet.codes/contact_links`)
    .then(response => response.json())
    .then(result => setContactLinksState(result))
    .catch(error => console.log(`error ${error}`))
  }, []);


  useEffect(() => {

    gsap.set('.contact__section-name', {
      x: -180,
      duration: .5,
    });

    gsap.set('.contact__address', {
      y: +110,
      duration: .3,
    });

    gsap.set('.contact__mail', {
      x: +110,
      duration: .3,
    });

    gsap.set('.contact__facebook', {
      y: -110,
      duration: .5,
    });

    gsap.set('.contact__linkedin', {
      y: 110,
      duration: .5,
    });

    gsap.set('.contact__cv', {
      x: -110,
      duration: .5,
    });

    gsap.set('.contact__logo', {
      x: +200,
      duration: .5,
    });

    gsap.set('.contact__map', {
      x: +110,
      duration: .5,
    });

    gsap.to('.contact__section-name', {x: 0, ease: 'none',
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        end:'top 50%',
        scrub: true,
        toggleActions:'play restart complete reverse',
      }
    });

    ScrollTrigger.batch('.item', {
      onEnter: batch => {
        batch.forEach(element => gsap.to(element, {y: 0, x: 0,  ease: 'none', stagger: .5,
          scrollTrigger: {
            trigger: '.contact',
            start: 'top 90%',
            end:'top 50%',
            scrub: true,
            toggleActions:'play restart complete reverse',
          }
        }))
      },
      once: true,
    });
  });


  return (
    <ContactWrapper id="contact" className="contact">
        <div className="contact__section-name">
          <h1>{menu !== undefined ? menu.name : 'Contact'}</h1>
        </div>
          {contactState !== undefined && (
          <>
            <div className="contact__address item">
              <p>{contactState[0].name}</p>
              <p>{contactState[0].address}</p>
            </div>
            <div className="contact__mail item">
              <p>{contactState[0].email}</p>
            </div>
          </>
          )}
          {contactLinksState !== undefined && (
            <>
              <div className={'contact__' + contactLinksState[0].type + ' item'}>
                <a href={contactLinksState[0].link} rel="noreferrer" target="_blank"><i className={contactLinksState[0].icon}></i></a>
              </div>
              <div className={'contact__' + contactLinksState[1].type + ' item'}>
                <a href={contactLinksState[1].link} rel="noreferrer" target="_blank"><i className={contactLinksState[1].icon}></i></a>
              </div>
              <div className={'contact__' + contactLinksState[2].type + ' item'}>
                <a href={contactLinksState[2].link} rel="noreferrer" target="_blank">{contactLinksState[2].icon}</a>
              </div>
            </>
          )}
        <div className="contact__map item"></div>
        <div className="contact__logo item">
          <a href="/#">
            <p>{logo}</p>
          </a>
        </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  display: grid;
  grid-row-gap: wrap;
  grid-gap: 1px;
  color: ${props => props.theme.textColorOnPurple};
  margin: 15vh 0 10vh 0;
  background-color: ${props => props.theme.textColorOnPurple};
  z-index: 2;
  @media ${device.mobileXS} {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 16.28vw;
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 16.38vw;
  }
  @media ${device.mobileM} {
    grid-auto-rows: 16.52vw;
  }
  @media ${device.tablet} {
    grid-auto-rows: 16.56vw;
  }
  @media ${device.laptopS} {
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 14.2vw;
  }
  @media ${device.laptopM} {
    grid-auto-rows: 14.21vw;
  }
  @media ${device.laptopL} {
    grid-auto-rows: 14.23vw;
  }
  .contact__section-name {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    z-index: 0;
    transition: all .5s;
    @media ${device.mobileXS} {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      top: 25vh;
      font-size: 2.5rem;
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileS} {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.laptopS} {
      grid-column: 1 / 3;
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
  .contact__address, .contact__mail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: .5em;
    background-color: var(--primary-color);
    z-index: 0;
    transition: all .5s;
    @media ${device.tablet} {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }
    p, a {
      font-family: var(--primary-font-family);
      font-size: 1.4rem;
      font-weight: ${props => props.theme.fontWeightOnPurple};
      line-height: 1.4em;
      letter-spacing: .05em;
      text-align: center;
      text-transform: uppercase;
    }
  }
  .contact__address {
    @media ${device.mobileXS} {
      grid-column: 3 / 5;
      grid-row: 2 / 4;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileS} {
      grid-column: 3 / 5;
      grid-row: 2 / 4;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.tablet} {
      grid-column: -1 / -4;
      grid-row: 2 / 3;
      border-bottom: none;
    }
    @media ${device.laptopS} {
      grid-column: 3 / 6;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
  }
  .contact__mail {
    @media ${device.mobileXS} {
      grid-column: -1 / -3;
      grid-row: 2 / 4;
    }
    @media ${device.mobileS} {
      grid-column: -1 / -3;
      grid-row: 2 / 4;
    }
    @media ${device.tablet} {
      grid-column: 3 / 5;
      grid-row: 3 / 4;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.laptopS} {
      grid-row: 1 / 2;
      border-bottom: none;
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
  }
  .contact__cv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: .5em;
    background-color: var(--primary-color);
    z-index: 0;
    transition: all .5s;
    @media ${device.mobileXS} {
      grid-column: 1 / 3;
      grid-row: 6 / 8;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileS} {
      grid-column: 1 / 3;
      grid-row: 6 / 8;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.tablet} {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      border-bottom: none;
    }
    @media ${device.laptopS} {
      grid-column: -2 / -1;
      grid-row: 1 / 2;
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
    a {
      font-weight: 800;
      color: ${props => props.theme.textColorOnPurple};
      text-decoration: none;
      cursor: none;
      transition: all .5s;
      @media ${device.mobileXS} {
        font-size: 2.8rem;
      }
      @media ${device.mobileS} {
        font-size: 3rem;
      }
      @media ${device.tablet} {
        font-size: 3.3rem;
      }
      @media ${device.laptopS} {
        font-size: 3.5rem;
      }
    }
    &:hover {
      background-color: ${props => props.theme.background};
    }
    &:hover a {
      font-size: 4.4em;
      color: var(--primary-color);
    }
  }
  .contact__facebook, .contact__linkedin {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    transition: all .5s;
    @media ${device.laptopS} {
      border-top: 1px solid ${props => props.theme.textColorOnPurple};
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      margin: .5em 1.5em;
      cursor: none;
      transition: all .5s;
      i {
        font-size: 2.5rem;
        color: ${props => props.theme.textColorOnPurple};
        transition: all .5s;
      }
    }
  }
  .contact__facebook {
    @media ${device.mobileXS} {
      grid-column: 1 / 3;
      grid-row: 2 / 4;
    }
    @media ${device.mobileS} {
      grid-column: 1 / 3;
      grid-row: 2 / 4;
    }
    @media ${device.tablet} {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    @media ${device.laptopS} {
      grid-column: 5 / 6;
      grid-row: 1 / 2;
    }
  }
  .contact__linkedin {
    @media ${device.mobileXS} {
      grid-column: 1 / 3;
      grid-row: 4 / 6;
    }
    @media ${device.mobileS} {
      grid-column: 1 / 3;
      grid-row: 4 / 6;
    }
    @media ${device.tablet} {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    @media ${device.laptopS} {
      grid-column: 6 / 7;
      grid-row: 1 / 2;
    }
  }
  .contact__linkedin:hover, .contact__facebook:hover {
    background-color: ${props => props.theme.background};
  }
  .contact__linkedin:hover i, .contact__facebook:hover i {
    font-size: 3.5em;
    color: var(--primary-color);
  }
  .contact__map {
    background-image: url(${map});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    transition: all .5s;
    @media ${device.mobileXS} {
      grid-column: 3 / 7;
      grid-row: 4 / 6;
    }
    @media ${device.mobileS} {
      grid-column: 3 / 7;
      grid-row: 4 / 6;
    }
    @media ${device.tablet} {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
    @media ${device.laptopS} {
      grid-row: 2 / 3;
    }
    &:hover {
      background-size: 125%;
      background-position: left bottom;
    }
  }
  .contact__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    z-index: 0;
    transition: all .5s;
    @media ${device.mobileXS} {
      grid-column: 3 / 7;
      grid-row: 6 / 8;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.mobileS} {
      grid-column: 3 / 7;
      grid-row: 6 / 8;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    @media ${device.tablet} {
      grid-column: 5 / 7;
      grid-row: 3 / 4;
    }
    @media ${device.laptopS} {
      grid-column: -1 / -3;
      grid-row: 2 / 3;
      border-bottom: 1px solid ${props => props.theme.textColorOnPurple};
    }
    a {
      text-decoration: none;
      cursor: none;
      p {
        color: ${props => props.theme.textColorOnPurple};
        @media ${device.mobileXS} {
          font-size: 2rem;
        }
        @media ${device.mobileS} {
          font-size: 3rem;
        }
        @media ${device.mobileM} {
          font-size: 3.5rem;
        }
        @media ${device.mobileL} {
          font-size: 4.3rem;
        }
        @media ${device.tablet} {
          font-size: 5rem;
        }
        @media ${device.laptopS} {
          font-size: 5.2rem;
        }
      }
    }
  }
`

export default React.memo(Contact);